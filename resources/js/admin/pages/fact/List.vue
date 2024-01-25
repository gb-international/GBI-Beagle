<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <list-layout addurl="/fact-add" buttontext="Add Fact">
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
        sticky-header="460px"
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
        <template #cell(status)="data">
          <span 
              v-if="data.item.status == 1" 
              class="badge badge-success">Published</span>
          <span class="badge badge-default" v-else>Draft</span>
        </template>
        <template #cell(action)="data">
          <publish-icon 
            v-if="data.item.status == 0" 
            @click.native="publishItem(data.item.id,1)"
            >
          </publish-icon>
          <draft-icon
            v-else
            @click.native="draftItem(data.item.id,0)"
            >
          </draft-icon>
          <edit-icon :url="`/fact/${data.item.id}`"></edit-icon>
          <delete-icon 
            @click.native="deleteItem(data.item.id,data.index)"
            >
          </delete-icon>
        </template>
      </b-table> 
    </template>
    
    <template #pagination  v-if="items.data">
      <pagination :data="items" @pagination-change-page="getitems" :align="`right`"  :limit="limit">
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
import PublishIcon from '@/admin/components/icons/PublishIcon.vue';
import DeleteIcon from '@/admin/components/icons/DeleteIcon.vue';
import ViewIcon from '@/admin/components/icons/ViewIcon.vue';
import DraftIcon from '@/admin/components/icons/DraftIcon.vue';
import TableLoader from '@/admin/components/TableLoader.vue';
import { mapState } from 'vuex';
import io from 'socket.io-client';
import { notifsCollection } from '@/firebase';

export default {
  name: "ListPost",
  components:{
    'list-layout':listLayout,
    'table-loader':TableLoader,
    'pagination':pagination,
    'edit-icon':EditIcon,
    'delete-icon':DeleteIcon,
    'view-icon':ViewIcon,
    'publish-icon':PublishIcon,
    'draft-icon':DraftIcon
  },
  data() {
    return {
      fields: [
        {key:'name',label:'name',sortable:true,thClass: 'table-head'},
        {key:'description',label:'description',sortable:true,thClass: 'table-head'},
        {key:'status',label:'status',sortable:true,thClass: 'table-head'},
        {key:'updated_at',label:'last update',sortable:true,thClass: 'table-head'},
        {key:'action',label:'action',thClass: 'table-head'}
      ],
      limit:2,
      filter:'',
      perPage:7,
      options:[7,25,50,100],
      user_id: window.userId,
      socket : io(this.$hostName)
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
      this.$store.dispatch('getItems','/fact/all/'+size+'?page='+page);
    },
    deleteItem(id,index=-1) {
      let payload = {'api':"/fact/fact/"+id,index,'index':index};
      this.$store.dispatch('deleteItem',payload);
    },
    publishItem(id, status) {
      console.log(status)
      axios.get("/api/fact/status/"+id+"/"+status).then((res) => {});
      setTimeout(() =>
        this.socket.emit('sendToServer', 'NA'), 
      3000);

      notifsCollection.doc('New_Notif').set({
          type: "SiteNotif",
      })

      this.getitems();
    },
    draftItem(id, status){
      axios.get("/api/fact/status/"+id+"/"+status).then((res) => {});
      this.getitems();
    }
  },
};
</script>


