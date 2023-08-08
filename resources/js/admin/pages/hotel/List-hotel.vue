<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <list-layout addurl="/add-hotel" buttontext="add hotel">
    <template #perpage>
      <b-form-group
        label="Per page"
        label-for="per-page-select"
        label-cols-sm="6"
        label-cols-md="4"
        label-cols-lg="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
      >
        <b-form-select
          id="per-page-select"
          class="radius-0"
          v-model="perPage"
          :options="options"
        ></b-form-select>
      </b-form-group>
    </template>
    <template #searchbar>
      <b-form-input v-model="filter" type="search" placeholder="Type to Search" class="radius-0"></b-form-input>
    </template>
    <template #table>
    <section class="my-4 mx-auto pr-3" style="max-height: 70vh; overflow-y: auto;" id="listSec">
     <section class="customCard card card-1" style="background: white !important" v-for="data in items.data" :key="data.id">
      <div class="MainRow">
        <div class="d-flex flex-column justify-content-start align-items-start mainRow1">
          <p class="hotelName">{{data.name}}</p>
          <p class="locName">{{data.city}}</p>
          <div class="d-flex stars">
            <i class="fas fa-star" v-for="index in data.star_category" :key="index"></i>
            <i class="far fa-star" v-for="index in  (5 - data.star_category)" :key="index"></i>
          </div>
          <p class="amenP"><i class="fas fa-bed mr-2"></i>Superior Room Twin Beds</p>
          <p class="amenP"><i class="fas fa-wind mr-2"></i>Air Condition</p>
          <p class="amenP"><i class="fas fa-warehouse mr-2"></i>Banquet Hall</p>
          <p class="amenity">Amenities</p>
        </div>
        <div class="detailsRow">
          <p class="guests">{{data.rooms}} Rooms</p>
          <p class="price">Rs. 2500/-</p>
          <p class="taxes">+ Rs.537 Taxes</p>
          <p class="perRoom">per room / night</p>
        </div>
      </div>
      <!-- Images -->
      <div class="d-flex justify-content-center align-items-center mainRow2" style="background: white !important">
        <div class="d-flex flex-row justify-content-center">
            <div class="d-flex flex-column expDetCol1">
              <img 
                :src="$gbiAssets+'/images/hotel/'+data.images[0]"
                loading="lazy"
                alt="hotel"
                class="expDetailImg"
              >
              <div class="expImgSm">
                  <div>
                    <img 
                      :src="$gbiAssets+'/images/hotel/'+data.images[1]"
                      loading="lazy"
                      alt="hotel"
                      class="expDetailImgSmall"
                      style="margin-right: 10px"
                      >
                  </div>
                  <div>
                    <img 
                      :src="$gbiAssets+'/images/hotel/'+data.images[2]"
                      loading="lazy"
                      alt="hotel"
                      class="expDetailImgSmall"
                      style="margin-right: 10px"
                      >
                  </div>
                  <div>
                    <img 
                      :src="$gbiAssets+'/images/hotel/'+data.images[3]"
                      loading="lazy"
                      alt="hotel"
                      class="expDetailImgSmall"
                      style="margin-right: 10px"
                      >
                  </div>
                  <div>
                    <img 
                      :src="$gbiAssets+'/images/hotel/'+data.images[4]"
                      loading="lazy"
                      alt="hotel"
                      class="expDetailImgSmall"
                      >
                  </div>
              </div>
          </div>
          <div class="sideDiv">
            <i class="fas fa-plus cursor-pointer" @click="$router.push('/add-room')"></i>
            <i class="fas fa-pen cursor-pointer" @click="$router.push('/edit-hotel/'+data.id)"></i>
          </div>
        </div>
      </div>
     </section>
    </section>
    </template>
    
    <template #pagination  v-if="items.data">
      <pagination :data="items" @pagination-change-page="getitems" :align="`right`">
        <span slot="prev-nav">Previous</span>
        <span slot="next-nav">Next</span>
      </pagination>
    </template>

  </list-layout>
</template>

<script>
import listLayout from '@/admin/components/layout/ListLayout.vue';
import pagination  from 'laravel-vue-pagination';
import EditIcon from '@/admin/components/icons/EditIcon.vue';
import DeleteIcon from '@/admin/components/icons/DeleteIcon.vue';
import ViewIcon from '@/admin/components/icons/ViewIcon.vue';
import TableLoader from '@/admin/components/TableLoader.vue';
import { mapState } from 'vuex';

export default {
  name: "ListHotel",
  components:{
    'list-layout':listLayout,
    'table-loader':TableLoader,
    'pagination':pagination,
    'edit-icon':EditIcon,
    'delete-icon':DeleteIcon,
    'view-icon':ViewIcon,
  },
  data() {
    return {
      fields: [
        {key:'name',label:'hotel name',sortable:true,thClass: 'table-head'},
        {key:'city',label:'location',sortable:true,thClass: 'table-head'},
        {key:'type',label:'star',sortable:true,thClass: 'table-head'},
        {key:'phoneno',label:'phone no',sortable:true,thClass: 'table-head'},
        {key:'action',label:'action',thClass: 'table-head'}
      ],
      filter:'',
      perPage:4,
      options:[4,5,6,7,25,50,100],
    };
  },
  mounted() {
    this.getitems();
  },
  computed:{
    ...mapState(['items']),
  },
  watch:{
    perPage:function(){
      this.getitems(1,this.perPage);
    }
  },

  methods: {
    getitems(page=1,size= this.perPage,state= this.$route.params.state) {
      this.$store.dispatch('getItems','/hotel/all/'+size+'/'+state+'?page='+page);
    },
    deleteItem(id,index=-1) {
      let payload = {'api':"/hotel/"+id,index,'index':index};
      this.$store.dispatch('deleteItem',payload);
    },
  },
};
</script>

<style scoped>
.MainRow {
  display: flex;
  justify-content: space-between !important;
  width: 100%;
  align-items: center;
}
.sideDiv{
  width: 62px;
  margin-left: 5px;
  height: auto;
  background: #000000d4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.sideDiv i{
  color: white;
  font-size: 16px;
}
.expDetailImg{
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.expImgSm{
  display: none;
}
.expDetailImgSmall{
  width:  50px;
  height: 50px;
  object-fit: cover;
}
.customCard{
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border: 1px solid #8080804d !important;
  border-radius: 0px;
  width: 80vw;
  height: auto;
  padding: 5px;
  margin-bottom: 20px;
}
.detailsRow{
  padding: 0px 20px;
  text-align: right;
}
p {
  font-family: Calibri (Body) !important;
}
.mainRow1 p {
    margin-bottom: 5px !important;
}
.detailsRow p{
  margin-bottom: 0px !important;
}
.hotelName{
  font-weight: 600;
  font-size: 20px;
}
.locName{
  font-weight: 400;
  font-size: 16px;
  color: gray;
}
.stars{
  margin-bottom: 20px;
}
.stars i{
  font-size: 18px;
  color: #ffa500;
}
.amenP{
  font-size: 12px;
  font-weight: 400;
  color: #767676;
}
.bookBtn{
    margin: 5px 0px;
    color: white;
    background-color: #00c4c4;
    border-color: #00c4c4;
    padding: 6px 25px 6px 25px;
    width: 95px;
    height: 35px;
    border: 0px;
    font-size: 15px;
    font-weight: 500;
}
.bookBtn:hover{
  box-shadow: 2px 2px grey;
  color: #212529;
}
.amenity{
  margin: 5px 0px;
  color: #00c4c4;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}
.guests{
  font-size: 14px;
  font-weight: 500;
}
.price{
  margin-top: 20px;
  font-size: 22px;
  font-weight: 500;
}
.taxes{
  font-size: 13px;
  font-weight: 400;
  color: #2c2929;
}
.perRoom{
  font-size: 13px;
  font-weight: 400;
  color: #2c2929;
}
@media (max-width: 768px) and (min-width: 640px) { 
  .customCard{
    width: 65vw;
  }
}
@media (min-width: 768px){
  .expDetailImg{
    width: 230px;
    height: 170px;
    margin-bottom: 10px;
  }
  .expImgSm{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1279px ) and (min-width: 768px){ 
  .customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 80vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1280px) { 
.customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 65vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1536px) { 
.customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 50vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
</style>