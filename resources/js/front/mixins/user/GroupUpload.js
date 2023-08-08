import XLSX from "xlsx";
import jsPDF from "jspdf";
import 'jspdf-autotable';
const GroupUpload = {
    data() {
        return {
            
            searchQuery: null,
            row_input: 1,
            submit_btn: false,
            edit_index: -1,
            total_row: "",
            new_row: [],
            error: false,
            message: '',
            tour_id:'',
        };
    },
    created(){
        this.tour_id = this.$cookies.get('group_member_id');
    },
    mounted() {
        this.groupMember();
    },
    watch: {
        row_input: function () {
            if (this.row_input > 0) {
                this.submit_btn = true;
            }
        },
    },

    methods: {
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
        up() {
            this.new_row.push({
                first_name: "",
                last_name: "",
                email: "",
                gender: "",
                age: "",
                mobile: "",
                tour_id: this.tour_id,
                user_type:this.user_type
            });
            this.row_input++;
        },

        down() {
            if (this.new_row.length >= 1) {
                this.new_row.splice(-1);
                this.row_input--;
            }
        },
        delete_new_row(index) {
            this.new_row.splice(index, 1);
        },

        groupMember() {
            var data = { tour_id: this.tour_id,user_type:this.user_type };
            this.$api.POST("/api/group-member", data)
                .then((response) => {
                    this.total_row = response;
                })
        },
        // Delete Row
        delete_row(index, id) {
            //
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
                        this.$api.POST("/api/destroy-member", data)
                            .then((response) => {
                                this.total_row.splice(index, 1);
                            })
                            .catch((error) => {
                                this.handleError(error);
                            });
                        this.$swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                    }
                });
        },
        edit_row(index) {
            this.edit_index = index;
        },
        update_row(index) {
            this.UserTourUpdate(this.total_row[index]);
            this.edit_index = "";
        },
        UserTourUpdate(data) {
            this.checkDuplicateEmail();
            if (this.error == true) {
                return false;
            }
            this.$api.POST("/api/group-member-update", data)
                .then((response) => {
                    if (response == "error") {
                        this.$swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Please enter valid travel code!",
                        });
                    } else {
                        this.edit_index = -1;
                        this.$swal.fire("Success", "Member updated !!!", "success");
                        // this.tourListData();
                    }
                })
                .catch((error) => {
                    this.handleError(error);
                });
        },

        UserTourSave() {
            this.checkDuplicateEmail();
            if (this.error == true) {
                return false;
            }

            for (var i = this.new_row.length - 1; i >= 0; i--) {
                if (this.new_row[i]["first_name"] == "") {
                    this.new_row.splice(i, 1);
                }
            }

            this.$api.POST("/api/group-add", this.new_row)
                .then((response) => {
                    if (response == "error") {
                        this.$swal.fire({
                            icon: "error",
                            title: "Try again",
                            text: "Please enter valid travel code!",
                        });
                    } else {
                        this.$swal.fire("Success", "Group data has added", "success");
                        this.new_row = [];
                        this.submit_btn = false;
                        this.groupMember();
                    }
                })
        },

        changeExcelFile(event) {
            var vm = this;
            let file = event.target.files[0];
            let filename = file.name;
            let ext = filename.split(".").pop();

            if (ext == "xlsx") {
                var files = event.target.files,
                    f = files[0];
                var reader = new FileReader();
                reader.onload = function (event) {
                    var data = new Uint8Array(event.target.result);
                    var workbook = XLSX.read(data, { type: "array" });
                    let sheetName = workbook.SheetNames[0];
                    /* DO SOMETHING WITH workbook HERE */
                    let worksheet = workbook.Sheets[sheetName];
                    var main_data = XLSX.utils.sheet_to_json(worksheet);
                    console.log(main_data);
                    for (var i = 0; i < main_data.length; i++) {
                        let row = {
                            first_name: main_data[i]["first_name"],
                            last_name: main_data[i]["last_name"],
                            email: main_data[i]["email"],
                            gender: main_data[i]["gender"],
                            age: main_data[i]["age"],
                            mobile: main_data[i]["mobile"],
                            tour_id: vm.tour_id,
                            user_type: vm.user_type
                        };
                        vm.new_row.push(row);
                        vm.submit_btn = true;
                    }
                    // vm.new_row.splice(0, 1);
                };
                reader.readAsArrayBuffer(f);
            } else {
                this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
                return false;
            }
        },

        downloadPDF() {
            console.log("create pdf here");
        },
        back() {
            this.$router.push("/tour-list");
        },
        checkDuplicateEmail() {
            var merged = [];
            var merged = [...this.total_row, ...this.new_row];
            var valueArr = merged.map(function (item) { return item.email });
            var isDuplicate = valueArr.some(function (item, idx) {
                return valueArr.indexOf(item) != idx
            });
            console.log(merged);
            if (isDuplicate == true) {
                this.message = 'Duplicate Email Found';
                this.error = true;
            } else {
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
    },
};

export default GroupUpload;