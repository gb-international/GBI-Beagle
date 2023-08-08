<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
 <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10 pt-3">
        <div class="col-sm-4">
          <div class="input-group filter-search">
            <input class="form-control py-2 border-right-0 border" type="search"
              value="search" id="example-search-input" v-model="searchQuery"
              placeholder="Search .." />
            <span class="input-group-append">
              <button class="btn btn-outline-secondary border-left-0 border" type="button">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="row group_list simple-form list-form pl-2 font-12">
        <table class="table text-dark table-bordered" style="background: #f4f6f9">
          <thead>
            <th class="w-80">Sr no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th class="w-80">Gender</th>
            <th class="width-70">Age</th>
            <th class="width-80">Paid/Free</th>
            <th class="width-160">Email</th>
            <th class="w-160">Contact No.</th>
            <th class="w-160">Payment Status</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
              <td class="text-center padding-top-10">{{data.srNo}}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.first_name"
                  readonly
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.last_name"
                  readonly
                />
              </td>
              <td>
                <select class="form-control" disabled v-model="data.gender">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model="data.age"
                  readonly
                />
              </td>
               <td>
               <select class="form-control" disabled v-model="data.is_paid">
                  <option value="true">Paid</option>
                  <option value="false">Free</option>
                </select>
              </td>
              <td>
                 <input
                  type="text"
                  class="form-control"
                  v-model="data.email"
                  readonly
                />
              </td>
              <td>
                <div class="row">
                  <div class="col-7">
                    <input
                      type="number"
                      class="form-control"
                      v-model="data.mobile"
                      readonly
                    />
                  </div>
                  <!-- <div class="col-5 justify-content-end">
                  </div> -->
                </div>
              </td>
              <td>
                 <input
                  v-if="data.is_paid == true"
                  type="text"
                  class="form-control"
                  v-model="data.payment_status"
                  readonly
                />
                <input
                  v-else
                  type="text"
                  class="form-control"
                  value="N/A"
                  readonly
                />

              </td>
            </tr>
          </tbody>
        </table>
        <!-- <p class="text-danger font-weight-bold" v-if="this.error==true">{{ message }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import XLSX from "xlsx";
import GroupExcelUpload from "@/admin/mixins/GroupExcelUpload";
export default {
  name: "AddGroupCorporateExcelUpload",
  mixins: [GroupExcelUpload],
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      lastSr: 0,
      excel_form: new Form({
        excel_file: "",
      }),
    };
  },
  mounted() {
    this.groupMember();
    //console.log(this.selectAll);
  },
  methods: {
    groupMember() {
      axios
        .get(`/api/corp-group/${this.$route.params.tour_code}/corporate`)
        .then((res) => {
            if (res.data) {
              for(let i = 0;i<res.data.length;i++){
                res.data[i].srNo = i+1;
                this.lastSr += 1;
            }
            this.total_row = res.data;
          }
        });
    },
  },
};
</script>
<style scoped>
select {
  width: 100%;
  height: 50px;
  font-size: 90%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  border: none;
  padding: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px;
  background: #f4f6f9 !important;
}
/* For IE <= 11 */
select::-ms-expand {
  display: none; 
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input {
  background: #f4f6f9 !important
}
</style>