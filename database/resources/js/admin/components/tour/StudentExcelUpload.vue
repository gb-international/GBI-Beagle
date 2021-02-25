<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10 pt-3">
        <div class="col-sm-3">
          <button type="button" class="btn btn-dark border-0" :disabled="checkbox_state == 0" @click="sendLoginDetails()">Send Login Credentails</button>
        </div>
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
        <div class="col-sm-2 p-0 text-center">
          <a class="text-dark" :href="`/assets/sample-group-list.xlsx`" download>
            <i class="fas fa-download"></i> Name list formate
          </a>
        </div>
        <div class="col-sm-3">
          <div class="form-group file-upload">
            <div class="input-group file-input-group" data-controller="file-input">
              <input class="form-control" type="text" placeholder=".xlsx file upload" readonly data-target="file-input.value">
              <input type="file" class="form-control" 
                id="customFile"
                name="file"
                accept=".xlsx"
                @change="changeExcelFile($event)">
              <div class="input-group-append">
                <label class="btn btn-secondary mb-0" for="customFile">Browse</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row group_list simple-form list-form pl-2 font-12">
        <table class="table text-dark table-bordered">
          <thead>
            <th>
              <div class="form-check" v-if="total_row.length > 0">
                <input
                  class="form-check-input checkbox-select-all"
                  type="checkbox"
                  id="studentCheckbox"
                  v-model="selectAll"
                  title="Select All"
                /><label class="form-check-label font-12" for="studentCheckbox">All</label>
              </div>
              <div v-else>#</div>
            </th>
            <th >Sr.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th class="width-260">Email</th>
            <th class="w-80">Gender</th>
            <th class="width-70">Age</th>
            <th class="w-192">Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.email" class="hidden">
              <td class="text-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :value="data" :id="data.id" @change="checkedBox()" v-model="selected">
                </div>
              </td>
              <td class="text-center pt-2">{{ index + 1}}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.first_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.last_name"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.email"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.gender"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <input
                  type="number"
                  class="form-control"
                  v-model="data.age"
                  :readonly="index != edit_index"
                />
              </td>
              <td>
                <div class="row">
                  <div class="col-7">
                    <input
                      type="text"
                      class="form-control"
                      v-model="data.mobile"
                      :readonly="index != edit_index"
                    />
                  </div>
                  <div class="col-5 justify-content-end">
                    <div class="form-group action_item margin-top-11">
                      <img
                        v-if="index != edit_index"
                        class="edit mr-1"
                        :src="`/assets/front/icons/edit.png`"
                        @click="edit_row(index)"
                      />
                      <img
                        v-else
                        class="edit mr-1"
                        :src="`/assets/front/icons/update.png`"
                        @click="update_row(index)"
                      />
                      <img
                        class="delete"
                        :src="`/assets/front/icons/delete.png`"
                        @click="delete_row(index,data.id)"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr v-for="(data,index) in new_row" :key="index">
              <td></td>
              <td class="text-center">{{ index+1 }}</td>
              <td>
                <input type="text" class="form-control" v-model="data.first_name" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.last_name" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.email" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.gender" />
              </td>              
              <td>
                <input type="text" class="form-control" v-model="data.age" />
              </td>
              <td>
                <div class="row">
                  <div class="col-sm-8">
                    <input type="text" class="form-control" v-model="data.mobile" />
                  </div>
                  <div class="col-sm-4 text-left pt-2">
                    <img
                      class="delete w-16"
                      :src="`/assets/front/icons/delete.png`"
                      @click="delete_new_row(index)"
                    />
                  </div>
                </div>
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-danger font-weight-bold" v-if="this.error==true">{{ message }}</p>

        <!-- Buttons -->
        <div class="row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center">
          <div class="col-sm-4 pt-1">
            <button
              type="button"
              class="btn btn-default itrn_add_btn"
              @click="demoFromHTML()"
            >DOWNLOAD PDF</button>
          </div>

          <div class="col-sm-5 pt-1">
            <button
              type="button"
              class="btn btn-default itrn_add_btn"
              @click="UserGroupSave()"
              :disabled="new_row_add == false"
            >UPDATE</button>
          </div>
          <div class="col-sm-3 add-row-input-button p-0 m-0 text-left">
            <div class="row  p-0 m-0">
              <div class="col-sm-5  p-0 m-0">
                <small>Add Row</small>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Add Row.."
                  v-model="row_input"
                />
              </div>
              <div class="col-sm-5 pt-24">
                <button class="btn btn-info text-white" type="button" @click="add_row()">Go</button>
              </div>
              <div class="col-sm-2"></div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import jsPDF from "jspdf";
import XLSX from "xlsx";
import GroupExcelUpload from '@/admin/mixins/GroupExcelUpload';
export default {
  name: "AddGroup",
  mixins:[GroupExcelUpload],
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      excel_form: new Form({
        excel_file: "",
      }),
    };
  },

  mounted() {
    this.groupMember();
  },

  methods: {
    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
          user_type:"student",
          is_paid:"1"
        });
      }
      this.row_input = "";
    },
    
    groupMember() {
      axios.get(`/api/groupmembers/${this.$route.params.id}/student`).then((res) => {
        if (res.data) {
          this.total_row = res.data;
        }
      });
    },
    demoFromHTML() {
      var doc = new jsPDF();
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";
      for (var i = 0; i <= this.total_row.length - 1; i++) {
        let current = this.total_row[i];
        string +=
          "first_name : " +
          current.first_name +
          " , last_name : " +
          current.last_name +
          " , Gender :" +
          current.gender +
          " , Age : " + 
          current.age +
          " , Contact : " +
          current.mobile +
          "\n";
      }
      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },
    
    changeExcelFile(event) {
      var vm = this;
      let file = event.target.files[0];
      let filename = file.name;
      let ext = filename.split(".").pop();
      if (ext == "xlsx") {
        var files = event.target.files,
          f = files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
          var data = new Uint8Array(event.target.result);
          var workbook = XLSX.read(data, { type: "array" });
          let sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */
          let worksheet = workbook.Sheets[sheetName];
          var main_data = XLSX.utils.sheet_to_json(worksheet);
          for (var i = 0; i < main_data.length; i++) {
            // if one row consist 5 columns
            if (Object.keys(main_data[i]).length == 6) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];
              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }
              let row = {
                first_name: store[0],
                last_name: store[1],
                email: store[2],
                gender: store[3],
                age: store[4],
                mobile: store[5],
                tour_id: vm.$route.params.id,
                school_id: vm.$route.params.school_id,
              };
              vm.new_row.push(row);
            }
          }
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
  },

};
</script>