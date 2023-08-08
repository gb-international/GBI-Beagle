import jsPDF from "jspdf";
import 'jspdf-autotable';
const GroupExcelUpload = {
    data(){
        return{
            selected:[],
            checkbox_state:0,
            searchQuery: null,
            total_row: [
                {
                    first_name: "",
                    last_name: "",
                    email: "",
                    gender: "",
                    age: "",
                    mobile: "",
                    tour_id: this.$route.params.id,
                    school_id: this.$route.params.school_id,
                    user_type: "student",
                    is_paid: "1"
                },
            ],
            new_row: [],
            error:false,
            message:'',
            edit_index: -1,
            row_input: "",
            new_row_add: false,
        };
    },
    watch: {
        new_row: function () {
            if (this.new_row.length > 0) {
                this.new_row_add = true;
            } else {
                this.new_row_add = false;
            }
        },
    },
    methods:{
        generatePdf() {
            var doc = new jsPDF('p', 'pt', 'A4');
            var margins = { top: 10, bottom: 10, left: 10, width: 810 };
            var data = [];
            let j = 1;
            for (let i = 0; i < this.resultQuery.length; i++) {
                let d = this.resultQuery[i];
                let rows = [
                    j++, d.first_name, d.last_name, d.email, d.gender, d.age, d.mobile
                ];
                data.push(rows);
            }
            doc.autoTable({

                head: [['S.No', 'First Name', 'Last Name', 'Email', 'Gender', 'Age', 'Contact']],
                body: data,
            })
            doc.save('gbi-groupmember.pdf');
        },
        sendLoginDetails() {
            axios.post("/api/groupmembers/addlogindetail", this.selected)
                .then((response) => {
                    if (response.data == "error") {
                        this.$swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Please enter valid travel code!",
                        });
                    } else {
                        this.$swal.fire("Success", "Students saved and notifications has been sent !!!", "success");
                    }
                })
                .catch((error) => {
                    this.$swal.fire({
                        icon: "error",
                        title: "Try again",
                        text: error.data,
                    });
                    this.handleError(error);
                });
        },

        // Delete Row
        delete_row(index, id) {
            this.$swal
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.value) {
                        var data = { id: id };
                        axios.post("/api/groupmember/destroy", data)
                            .then((response) => {
                                this.$swal.fire(
                                    "Deleted!",
                                    "Member Deleted deleted.",
                                    "success"
                                );
                                this.total_row.splice(index, 1);
                            })
                            .catch((error) => {
                                this.handleError(error);
                            });
                    }
                });
        },
        delete_new_row(index) {
            this.new_row.splice(index, 1);
        },
        edit_row(index) {
            this.edit_index = index;
        },
        update_row(index) {
            this.UserTourUpdate(this.total_row[index]);
            this.edit_index = "";
        },
        UserTourUpdate(data) {
            axios.post("/api/groupmembers/update", data)
                .then((response) => {
                    if (response.data == "error") {
                        this.$swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Please enter valid travel code!",
                        });
                    } else {
                        this.edit_index = -1;
                        this.$swal.fire("Success", "Member updated !!!", "success");
                    }
                })
                .catch((error) => {
                    this.$swal.fire({
                        icon: "error",
                        title: "Try again",
                        text: error.data,
                    });
                    this.handleError(error);
                });
        },
        UserGroupSave() {
            this.checkDuplicateEmail();
            if(this.error == true){
                return false;
            }
            for (var i = this.new_row.length - 1; i >= 0; i--) {
                if (this.new_row[i]["first_name"] == "") {
                    this.new_row.splice(i, 1);
                }
            }
            axios.post("/api/groupmember/add", this.new_row)
                .then((response) => {
                    if (response.data == "error") {
                        this.$swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Please enter valid travel code!",
                        });
                    } else {
                        this.$swal.fire("Success", "Group data has added", "success");

                        this.new_row = [];
                        this.new_row_add = false;
                        this.groupMember();
                    }
                })
                .catch((error) => {
                    this.handleError(error);
                });
        },
        checkedBox() {
            if (this.selected.length > 0) {
                this.checkbox_state = 1;
            } else {
                this.checkbox_state = 0;
            }
        },
        checkDuplicateEmail(){
            var merged = [];
            var merged = [...this.total_row, ...this.new_row];
            var valueArr = merged.map(function (item) { return item.email });
            var isDuplicate = valueArr.some(function (item, idx) {
                return valueArr.indexOf(item) != idx
            });
            console.log(merged);
            if(isDuplicate == true){
                this.message = 'Duplicate Email Found';
                this.error = true;
            }else{
                this.message = '';
                this.error = false;
            }
        }
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.total_row.filter((item) => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every((v) => item.first_name.toLowerCase().includes(v));
                });
            } else {
                return this.total_row;
            }
        },
        selectAll: {
            get: function () {
                return this.resultQuery ? this.selected.length == this.resultQuery.length : false;
            },
            set: function (value) {
                var selected = [];
                if (value) {
                    this.resultQuery.forEach(function (user) {
                        selected.push(user);
                    });
                }
                this.selected = selected;
                this.checkedBox();
            }
        }
    },
}

export default GroupExcelUpload;