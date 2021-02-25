import { Form, HasError, AlertError } from "vform";

export default {
    name: "ProfileEdit",
    components: {
        "has-error": HasError,
    },
    data() {
        return {
            client_input_box: "",
            oddclass: false,
            evenclass: true,
            itineraryData: {},
            width: 0,
            image: "",
            prncilIcon: true,
            userinfo: [],
            total: [],
            school_list: "",

            school_field: false,
            namefield: false,
            addressfield: false,
            institutionfield: false,

            label_name: "",

            form: new Form({
                name: "",
                gender: "",
                email: "",
                phone_no: "",
                father_name: "",
                mother_name: "",
                city: "",
                state: "",
                country: "",
                zip_code: "",
                user_class: "",
                admission_year: "",
                address: "",
                dob: "",
                schoolName: "",
                client_type: "",
                client_input: "",
                profession_name: "",
                school_id: "",
                profession_address: "",
                user_profession: "",
                institution_code: "",
                subscribe: false,
            }),
        };
    },
    mounted() {
        if (localStorage.token == "") {
            this.$router.push("/");
        }
        this.$axios.get("/api/school-list").then((response) => {
            this.school_list = response.data;
        });

        var data = [];
        this.$axios
            .post("/api/user-show", data, {
                headers: { Authorization: `Bearer ${localStorage.token}` },
            })
            .then((response) => {
                var list = response.data.success;
                this.form.name = list.name;
                this.form.gender = list.information["gender"];
                this.form.email = list.email;
                this.form.phone_no = list.information["phone_no"];
                this.form.father_name = list.information["father_name"];
                this.form.mother_name = list.information["mother"];
                this.form.city = list.information["city"];
                this.form.state = list.information["state"];
                this.form.country = list.information["country"];
                this.form.zip_code = list.information["zip_code"];
                this.form.user_class = list.information["user_class"];
                this.form.admission_year = list.information["admission_year"];
                this.form.address = list.information["address"];
                this.form.dob = list.information["dob"];
                this.form.schoolName = list.information["schoolName"];
                this.form.user_profession = list.information["user_profession"];
                this.form.profession_name = list.information["profession_name"];
                this.form.profession_address = list.information["profession_address"];
                this.form.institution_code = list.information["institution_code"];
                this.form.image = list.information["photo"];
                this.image = this.form.image;
                if (list.subscribe) {
                    if (list.subscribe["status"] == 1) {
                        this.form.subscribe = true;
                    } else {
                        this.form.subscribe = false;
                    }
                }

                var type = this.form.user_profession;
                if (type == "student" || type == "teacher") {
                    this.client_input_box = "1";
                    this.form.school_id = list.information.school_id;
                } else if (type == "corporate") {
                    this.client_input_box = "2";
                } else {
                    this.client_input_box = "3";
                }
            })
            .catch((error) => {
                this.handleError(error);
            });
    },

    watch: {
        institution: function () {
            if (this.form.user_profession == "other") {
                this.namefield = true;
                this.addressfield = true;
                this.label_name = "Educational Institution";
            } else {
                this.namefield = false;
                this.addressfield = false;
            }
        },
        "form.user_profession": function () {
            this.namefield = false;
            this.addressfield = false;
            this.school_field = false;
            if (this.form.user_profession == "corporate") {
                this.namefield = true;
                this.addressfield = true;
                this.label_name = "Corporate";
            } else if (this.form.user_profession == "other") {
                this.namefield = true;
                this.label_name = "Occupation";
            } else {
                this.school_field = true;
            }
        },
    },

    methods: {
        onDrop: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            this.createFile(files[0]);
        },
        onChange(e) {
            var files = e.target.files;
            this.createFile(files[0]);
        },
        createFile(file) {
            if (!file.type.match("image.*")) {
                alert("Select an image");
                return;
            }
            var img = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = function (e) {
                vm.image = e.target.result;
                let data = new FormData();
                data.append("photo", vm.image);
                data.append("_method", "post"); // add this

                vm.$axios
                    .post("/api/update-user-image", data, {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    })
                    .then((response) => {
                        vm.image = response.data.photo;
                        vm.$swal.fire({
                            icon: "success",
                            title: "Profile image updated !!",
                        });
                    })
                    .catch((error) => console.log()); //
            };
            reader.readAsDataURL(file);
        },
        removeFile() {
            this.image = "";
        },

        /// Update the user information
        updateUserData() {
            if (this.form.subscribe == true) {
                this.form.subscribe = 1;
            } else {
                this.form.subscribe = 0;
            }
            this.form
                .post("/api/user-update", {
                    headers: { Authorization: `Bearer ${localStorage.token}` },
                })
                .then((response) => {
                    this.$swal.fire({ icon: "success", title: "Profile updated!!" });
                })
                .catch((error) => {
                    this.handleError(error);
                });
        },
    },
};