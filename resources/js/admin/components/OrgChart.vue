<template>
  <div id="org">
    <organization-chart id="organization-chart" :datasource="ds">
      <template slot-scope="{ nodeData }">
          <div :class="['node-box',  nodeData.role_id == '1' ? 'parent' : '']" @click="checkPerms(nodeData.user_role_id, nodeData.role_id)">
            <div class="node-name">{{nodeData.title}}</div>
            <div class="node-content">
              <img width="25%" style="margin-top: 5px;" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
              <div class="node-title">{{nodeData.name}}</div>
            </div>
          </div>
        </template>
    </organization-chart>
  </div>
</template>

<script>
import OrganizationChart from "vue-organization-chart";
import { mapState } from 'vuex';
import $ from "jquery";

//import "element-ui/lib/theme-chalk/index.css";
import "vue-organization-chart/dist/orgchart.css";

export default {
  name: "OrgChart",
  components: {
    OrganizationChart
  },
  data() {
    return {
      ds: {}
    };
  },
  mounted() {
    this.getitems();
    //console.log(items.data)
    $(this.$el)
      .find("#organization-chart .node")
      .on("click", e => {
        // this.activeId = $(e.target)
        //   .closest(".node")
        //   .attr("id");
        // this.dialogVisible = true;
      });
  },
  computed:{
    ...mapState(['items']),
  },
  methods: {
    getitems() {
      this.$store.dispatch('getItems','');
      axios.get("/api/team-tree/list").then((res) => {
        this.ds = res.data.data
        //var newStr = this.ds.substring(1, this.ds.length-1);
        console.log(this.ds)
      });
    },
    checkPerms(id, role_id){
      console.log(role_id)
      if(role_id == 1){
        return false
      }
      else if(window.userRole == 2 || window.userRole == 1 || window.userRole == 3){
        this.$router.push('/check-permissions/${id}')
      }
    }
  },
};
</script>

<style>
#org .orgchart-container {
    margin-top: 7vh !important;
    position: relative;
    display: inline-block;
    height: 420px;
    width: calc(100% - 24px);
    border: none !important;
    overflow: auto;
    text-align: center;
}
#org .orgchart {
  background: #f4f6f9;
}
#org .orgchart .node .title {
  background-color: #06C4DE;
}
#org .node-name{
  background-color: #06C4DE;
  font-size: 12px !important;
  padding: 3px;
  font-weight: 500;
}
#org .node-title{
  font-size: 14px !important;
  padding: 2px;
  font-weight: 400;
}
#org .orgchart .node .content {
  border: 1px solid #06C4DE;
}
#org .orgchart .lines .leftLine {
  border-left: 1px solid #06C4DE;
}
#org .orgchart .lines .rightLine {
  border-right: 1px solid #06C4DE;
}
#org .orgchart .lines .topLine {
  border-top: 1px solid #06C4DE;
}
#org .orgchart .lines .bottomLine {
  border-bottom: 1px solid #06C4DE;
}
#org .orgchart .lines .downLine {
  background-color: #06C4DE;
}
</style>
