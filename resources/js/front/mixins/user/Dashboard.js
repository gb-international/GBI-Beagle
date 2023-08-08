const Dashboard = {
    name: "Dashboard",
    data() {
        return {
            itineraryData: {},
            upcoming_list: [],
            events_list: [],
            popular_list: [],
            userinfo: {},
            valid: false
        };
    },

    beforeMount() {
        const userdata = this.$cookies.get('user');
        if (userdata.status == 0) {
            this.$router.push("/user-information");
        }
    },
    mounted() {
        this.checkLogin();
        this.upComingData();
        this.upComingEvents();
        this.popularList();
    },
    methods: {
        checkLogin() {
            this.$cookies.remove('login');
            this.userinfo = this.$cookies.get('user');
            this.valid = true;
        },
        userData() {
            if (this.userinfo.status == 0) {
                this.$router.push("/user-information");
                return false;
            }
            if (this.userinfo.change_password == 0) {
                this.$swal.fire(
                    "warning",
                    "Please change your password for security purpose !!! <br>",
                    "warning"
                );
            }
        },
        upComingData() {
            this.$axios.get("/api/travel-program/upcoming-tour").then(response => {
                this.upcoming_list = response.data;
            });
        },
        upComingEvents() {
            this.$axios.get("/api/upcoming-events").then(response => {
                this.events_list = response.data;
            });
        },
        eventsList() {
            this.$axios.get("/api/travel-program/upcoming-tour").then(response => {
                this.upcoming_list = response.data;
            });
        },
        popularList(){
            this.$axios.get("/api/popular-tours").then(response => {
                this.popular_list = response.data;
            });
        },
        getImgUrl(img) {
            return "/uploadimage/" + img;
        }
    }
};

export default Dashboard;