<template>
    <div class="user_dashboard_profile">
      <div class="container">
        <div class="text-right">
          <router-link :to="`/profile-edit`" class="user_edit" title="edit profile">
            <img src="/images/icons/user.png" class="icon-width">
          </router-link><br>
          <router-link :to="`/update-password`" class="user_edit" title="setting">
            <img src="/images/icons/setting.png" class="icon-width">
          </router-link>
        </div>
        <div class="row" v-if="userinfo">
          <div class="col-lg-2 text-center image">
            <figure v-lazyload class="image__wrapper">
              <ImageSpinner class="image__spinner" />
              <img
                class="image__item img img-circle profile-img"
                :data-url="`/uploadimage/${userinfo.photo}`"
                alt="user profile"
              />
            </figure>
          </div>
          <div class="col-lg-10">
            <div class="username text-left">
              <h3>{{ userinfo.name }}</h3>
              <p>{{ userinfo.city }} {{ userinfo.country }}</p>
            </div>
            <div class="row text-left">
              <div class="col-lg-5">
                <div class="userinfo">
                  <div class="userinfoFirst">
                    <p v-if="userinfo.father_name">Father Name</p>
                    <p class="bottom_text">{{ userinfo.father_name }}</p>
                  </div>
                  <div class="userinfoSecond">
                    <p>User Type</p>
                    <p class="bottom_text">{{ userinfo.user_profession }}</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-7">
                <div class="userinfo">
                  <div class="userinfoFirst">
                    <p>User Id</p>
                    <p class="bottom_text">{{ userinfo.email }}</p>
                  </div>
                  <div class="userinfoSecond">
                    <p>Mobile Number</p>
                    <p class="bottom_text">{{ userinfo.phone_no }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="logout" @click="logout">Logout</a>
      </div>
    </div>
</template>
<script>
export default {
    props:{
      userinfo:{
        required:true
      }
    },
    methods:{
      logout() {
          this.$api.POST('/api/logout-user', []).then(response => {
              this.$cookies.remove('access_token');
              this.$store.dispatch("logout").then(() => {
                  this.$bus.$emit("logged", "User loogedout");
                  this.$router.push("/");
              })
          }).catch(error => {
              this.$store.dispatch("logout").then(() => {
                  this.$bus.$emit("logged", "User loogedout");
                  this.$router.push("/");
              })
          })
      }
    }
}
</script>