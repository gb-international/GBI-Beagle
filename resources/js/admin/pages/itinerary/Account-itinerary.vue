<!--
This Template is for listing for the Itinerary using function to get the 
data from the api to display the data about the Itinerary from the backend .
-->

<!--
This Template is for listing for the Itinerary using function to get the 
data from the api to display the data about the Itinerary from the backend .
-->
<template>
  <list-layout>
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
      <b-table
        id="table-transition"
        striped
        hover
        outlined
        sticky-header="405px"
        class="w-100 table-layout"
        :fields="fields"
        :items="items.data"
        :busy="$store.getters.isBusy"
        :filter="filter"
        primary-key="updated_at"
      >
        <template #table-busy>
          <table-loader />
        </template>
        <template #cell(address)="data">
          
          {{ data.item.title | readMore(50) }}
        </template>

        <template #cell(status)="data">
          <span  v-if="data.item.status == 'cancel'" class="badge badge-danger">{{data.item.status}}</span>
          <span  v-if="data.item.status == 'pending'" class="badge badge-warning">{{data.item.status}}</span>
        </template>

        <template #cell(action)="data">
          <bookingdetail :url="`/account-itinerary-view/${data.item.id}`"></bookingdetail>
          
          <delete-icon 
            @click.native="deleteItem(data.item.id,data.index)"
            >
          </delete-icon>
          <view-icon :url="`/view-itinerary/${data.item.itinerary_id}`"></view-icon>
        </template>
      </b-table> 
    </template>
    <template #pagination  v-if="items.data">
      <div class="w-100">
        <pagination :data="items" @pagination-change-page="getitems" :align="`right`" :limit="limit">
          <span slot="prev-nav">Previous</span>
          <span slot="next-nav">Next</span>
        </pagination>
      </div>  
    </template>
  </list-layout>
</template>

<script>
import listLayout from '@/admin/components/layout/ListLayout.vue';
import pagination  from 'laravel-vue-pagination';
import EditIcon from '@/admin/components/icons/EditIcon.vue';
import DeleteIcon from '@/admin/components/icons/DeleteIcon.vue';
import ViewIcon from '@/admin/components/icons/ViewIcon.vue';
import BookingDetail from '@/admin/components/icons/BookingDetail.vue';
import TableLoader from '@/admin/components/TableLoader.vue';
import { mapState } from 'vuex';

export default {
  name: "List",
  components:{
    'list-layout':listLayout,
    'table-loader':TableLoader,
    'pagination':pagination,
    'delete-icon':DeleteIcon,
    'view-icon':ViewIcon,
    'bookingdetail':BookingDetail,
  },
  data() {
    return {
      fields: [
        {key:'title',label:'TITLE',sortable:true,thClass: 'table-head'},
        {key:'name',label:'SALES MAN',sortable:true,thClass: 'table-head'},
        {key:'price',label:'PRICE',sortable:true,thClass: 'table-head'},
        {key:'status',label:'STATUS',sortable:true,thClass: 'table-head'},
        {key:'action',label:'ACTION',thClass: 'table-head'}
      ],
      limit:2,
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
      this.$store.dispatch('getItems','/accounts/all/'+size+'?page='+page);
    },
    deleteItem(id,index=-1) {
      let payload = {'api':"/accounts/"+id,index,'index':index};
      this.$store.dispatch('deleteItem',payload);
    },
  },
};
</script>

