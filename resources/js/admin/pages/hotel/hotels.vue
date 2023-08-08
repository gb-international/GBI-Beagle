<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  
         <div class="row py-2 mx-3 py-4">
            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/ahemdabad')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/ahemdabad.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Ahemdabad</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/bangalore')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/bangalore.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Bangalore</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/chennai')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/chennai.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Chennai</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/coimbatore')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/coiambature.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Coimbatore</p>    
                </div>
              </div>
            </div>

           <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/delhi')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/delhi.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Delhi</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/hyderabad')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Hyderabad.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Hyderabad</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/jaipur')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Jaipur.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Jaipur</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/jodhpur')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Jodhpur.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Jodhpur</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/jaipur')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Jaipur.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Jaipur</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/kanpur')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/kanpur.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Kanpur</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/kochi')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Kochi.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Kochi</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/madurai')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Madurai.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Madurai</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/mumbai')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/mumbai.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Mumbai</p>    
                </div>
              </div>
            </div>

            
            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/patna')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Patna.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Patna</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/pune')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Pune.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Pune</p>    
                </div>
              </div>
            </div>

            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/thiruvananthapuram')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/Thiruvananthapuram.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Thiruvananthapuram</p>    
                </div>
              </div>
            </div>
            
            <div class="col-md-3 col-6">
              <div @click="$router.push('/hotel-list/west-bengal')" class="card shadow py-2 mb-3 cityDiv">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/cities/westbengal.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">West Bengal</p>    
                </div>
              </div>
            </div>


          </div>
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
      perPage:7,
      options:[7,25,50,100],
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
    getitems(page=1,size= this.perPage) {
      this.$store.dispatch('getItems','/hotel/all/'+size+'?page='+page);
    },
    deleteItem(id,index=-1) {
      let payload = {'api':"/hotel/"+id,index,'index':index};
      this.$store.dispatch('deleteItem',payload);
    },
  },
};
</script>
<style scoped>
.customImgJ{
    margin-top: 2vh;
    margin-bottom: 2px;
    height: 5.5vh !important;
  }
.cardCText{
    font-weight: 500;
  }
.cityDiv{
    border-radius: 10px;
    cursor: pointer;
}
</style>