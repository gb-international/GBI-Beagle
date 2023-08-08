<!--
Creator: @Manas
This Template is for listing the permissions assigned to a user
-->
<template>
  <list-layout addurl="/list-member" buttontext="Back">
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
        <template #cell(action)="data">
        <button
            v-if="hasRemovePerms && data.item.parent_user == $route.params.id"
            class="btn btn-danger"
            style="font-size: 12px;"
            @click.prevent="deleteAssign(data.item.id)"
            >
        Remove
        </button>
        <button
            v-if="hasAssignPerms && data.item.parent_user != $route.params.id"
            class="btn btn-info"
            style="font-size: 12px;"
            @click.prevent="assignUser(data.item.id)"
            >
        Assign
        </button>
        <button
            v-if="data.item.parent_user == $route.params.id"
            class="btn btn-success"
            style="font-size: 12px;"
            disabled
            >
        Assigned
        </button>
      </template>
      </b-table> 
    </template>
    
    <template #pagination  v-if="items.data">
      <pagination :data="items" @pagination-change-page="getitems" :align="`right`" :limit="limit">
        <span slot="prev-nav">Previous</span>
        <span slot="next-nav">Next</span>
      </pagination>
    </template>

  </list-layout>
</template>

<script>
import listLayout from '@/admin/components/layout/ListLayout.vue';
import pagination  from 'laravel-vue-pagination';
import TableLoader from '@/admin/components/TableLoader.vue';
import DeleteIcon from '@/admin/components/icons/DeleteIcon.vue';
import { mapState } from 'vuex';

export default {
  name: "ListMember",
  components:{
    'list-layout':listLayout,
    'table-loader':TableLoader,
    'pagination':pagination,
    'delete-icon':DeleteIcon,
  },
  data() {
    return {
      fields: [
        {key:'name',label:'Name',sortable:true,thClass: 'table-head'},
        {key:'parent_name',label:'Assigned Under',sortable:true,thClass: 'table-head'},
        {key:'department_name',label:'Department',sortable:true,thClass: 'table-head'},
        {key:'role_name',label:'Role',sortable:true,thClass: 'table-head'},
        {key:'updated_at',label:'Last Updated',thClass: 'table-head'},
        {key:'action',label:'action',thClass: 'table-head'}
      ],
      filter:'',
      limit:2,
      perPage:7,
      options:[7,25,50,100],
    };
  },
  mounted() {
    this.getitems();
  },
  computed:{
    ...mapState(['items']),
     hasRemovePerms(){
      if(window.userRole == 1){
          return true;
      }
      const perms = window.deletePerms;
      const hasPerm = (perm) => perm.permission_id === 95;
      return perms.some(hasPerm);
    },
    hasAssignPerms(){
      if(window.userRole == 1){
          return true;
      }
      const perms = window.createPerms;
      const hasPerm = (perm) => perm.permission_id === 95;
      return perms.some(hasPerm);
    }

  },
  watch:{
    perPage:function(){
      this.getitems(1,this.perPage);
    }
  },

  methods: {
    getitems(page=1,size= this.perPage) {
      this.$store.dispatch('getItems','/assign-users-list/'+this.$route.params.role+'/'+size+'/'+this.$route.params.dep_id+'?page='+page);
    },
    assignUser(id,index=-1) {
      //let payload = {'api':"permission/remove/"+id};
      //this.$store.dispatch('deleteItem',payload);
      axios.get("/api/assign-user/"+id+"/"+this.$route.params.id).then((res) => {});
      this.getitems();
    },
    deleteAssign(id,index=-1) {
      //let payload = {'api':"permission/remove/"+id};
      //this.$store.dispatch('deleteItem',payload);
      axios.get("/api/assign-users/remove/"+id).then((res) => {});
      this.getitems();
    },
  },
};
</script>