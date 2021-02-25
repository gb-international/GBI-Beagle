
import { Form, HasError, AlertError } from "vform";
const UpdatePasswordMixin = {
    components: {
        "has-error": HasError,
        "alert-error": AlertError,
    },
    data() {
        return {
            form: new Form({
                current_password: "",
                new_password: "",
                confirm_password: "",
            }),
            message:'',
        };
    },

    methods: {
        UpdatePassword() {
            var data = {
                current_password: this.form.current_password,
                new_password: this.form.new_password,
                confirm_password: this.form.confirm_password
            };

            this.$api.POST("/api/update-password", data).then(response => {
                this.form.reset();
                this.message = 'Your password has been updated';
            })
            .catch(error => {
                this.handleError(error);
            });
        }
    }
};

export default UpdatePasswordMixin;