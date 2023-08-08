<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <panel-layout>
     <template #displayType>
        <select class="customButton" v-model="notifDisplay">
          <option value="Graph">Graph</option>
          <option value="Table">Table</option>
        </select>
    </template>

    <template #category>
      <b-form-select
        class="radius-0"
        v-model="notifCategory"
        :options="categoryOptions"
        ></b-form-select>
      </b-form-group>
    </template>

    <template #status>
      <b-form-select
        class="radius-0"
        v-model="notifStatus"
        :options="statusOptions"
        ></b-form-select>
      </b-form-group>
    </template>

    <template #service>
      <b-form-select
        class="radius-0"
        v-model="notifService"
        :options="serviceOptions"
        ></b-form-select>
      </b-form-group>
    </template>

    <template #timeSpan>
      <b-form-select
        class="radius-0"
        v-model="timeSpan"
        :options="timeSpanOptions"
        ></b-form-select>
      </b-form-group>
    </template>

    <template #table v-if="notifDisplay == 'Table'">
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
              class="badge badge-success">Success</span>
          <span class="badge badge-default" style="color: red;" v-else>Failed</span>
        </template>
        <!-- <template #cell(action)="data">
          <view-icon url="#"></view-icon>
        </template> -->
      </b-table> 
    </template>
    
    <template #pagination  v-if="items.data && notifDisplay == 'Table'">
      <pagination :data="items" @pagination-change-page="getitems" :align="`right`"  :limit="limit">
        <span slot="prev-nav">Previous</span>
        <span slot="next-nav">Next</span>
      </pagination>
    </template>

    <template #graph v-if="notifDisplay == 'Graph'">
      <notif-chart v-if="loaded" :chartData="chartData" :labelsData="labelsData" :chartLabel="notifCategory +' (' + notifStatus + ') ' " :chartStatus="notifStatus" :key="chartKey" />
    </template>
  </panel-layout>
</template>

<script>
import panelLayout from '@/admin/components/layout/NotifPanelLayout.vue';
import pagination  from 'laravel-vue-pagination';
import EditIcon from '@/admin/components/icons/EditIcon.vue';
import DeleteIcon from '@/admin/components/icons/DeleteIcon.vue';
import ViewIcon from '@/admin/components/icons/ViewIcon.vue';
import TableLoader from '@/admin/components/TableLoader.vue';
import NotificationChart from '@/admin/pages/notificationPanel/notif-chart.vue';
import { mapState } from 'vuex';

export default {
  name: "ListPost",
  components:{
    'panel-layout':panelLayout,
    'table-loader':TableLoader,
    'pagination':pagination,
    'edit-icon':EditIcon,
    'delete-icon':DeleteIcon,
    'view-icon':ViewIcon,
    'notif-chart':NotificationChart,
  },
  data() {
    return {
      fields: [
        {key:'email',label:'Email',sortable:true,thClass: 'table-head'},
        {key:'status',label:'status',sortable:true,thClass: 'table-head'},
        {key:'data.title',label:'title',sortable:true,thClass: 'table-head'},
        {key:'service',label:'Service',sortable:true,thClass: 'table-head'},
        {key:'category',label:'Category',sortable:true,thClass: 'table-head'},
        {key:'created_at',label:'Date',sortable:true,thClass: 'table-head'},
      ],
      limit:2,
      filter:'',
      notifCategory:'All',
      notifStatus: 'Success',
      notifService: 'Both',
      notifDisplay: 'Table',
      categoryOptions:[ 'All', 'Blog', 'Itinerary', 'Promotions', 'Travel', 'Website'],
      statusOptions:['Success','Failed'],
      serviceOptions:[ 'Both','Email','SMS'],
      timeSpan: 'Monthly',
      timeSpanOptions:[ 'Weekly', 'Monthly','Yearly'],
      chartData: [],
      labelsData: [],
      chartKey: 0,
      loaded: false,
    };
  },
  mounted() {
    this.getitems();
    this.getData();
  },
  computed:{
    ...mapState(['items']),
  },
  watch: {
      notifCategory: function () {
          this.getitems();
          this.getData();
      },

      notifStatus: function () {
          this.getitems();
          this.getData();
      },

      notifService: function () {
          this.getitems();
          this.getData();
      },

      timeSpan: function () {
          this.getitems();
          this.getData();
      }
  },
  methods: {
    changeDisplay(display){
      this.notifDisplay = display;
    },
    getitems(page=1) {
      this.$store.dispatch('getItems','/notification/all/'+this.timeSpan+'/'+this.notifCategory.toLowerCase()+'/'+this.notifStatus+'/'+this.notifService.toLowerCase()+'?page='+page);
    },
    getData() {
      axios
          .get(`/api/notification/chart/${this.timeSpan}/${this.notifCategory.toLowerCase()}/${this.notifStatus}/${this.notifService.toLowerCase()}`)
          .then((res) => {
            this.loaded = false
            let chartArray = []
            let labelsArray = []
              if (res.data) {
                for(let i = 0;i<res.data.length;i++){
                    chartArray.push(parseInt(res.data[i].count))
                }
                this.chartData = Array.from(chartArray);

                for(let i = 0;i<res.data.length;i++){
                    labelsArray.push(res.data[i].timeSpan)
                  }
                this.labelsData = Array.from(labelsArray);
                //console.log(this.failedData)
                this.chartKey +=1;
                this.loaded = true
            }
      });
    },
  },
};
</script>

<style scoped>
.customButton {
    width: 200px;
    height: 45px;
    color: white;
    background-color: #332f58;
    border-color: #332f58;
    padding-left: 7px;
}
</style>