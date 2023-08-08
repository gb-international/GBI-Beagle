<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10 pt-3">
        <div class="col-sm-3">
          <button
            type="button"
            class="btn btn-dark border-0"
            :disabled="checkbox_state == 0"
            @click="sendLoginCreds()"
          >
            Send Login Credentails
          </button>
        </div>
        <div class="col-sm-4">
          <div class="input-group filter-search">
            <input
              class="form-control py-2 border-right-0 border"
              type="search"
              value="search"
              id="example-search-input"
              v-model="searchQuery"
              placeholder="Search .."
            />
            <span class="input-group-append">
              <button
                class="btn btn-outline-secondary border-left-0 border"
                type="button"
              >
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
        <div class="col-sm-2 p-0 text-center">
          <a
            class="text-dark"
            :href="`/assets/sample-group-list.xlsx`"
            download
          >
            <i class="fas fa-download"></i> Name list formate
          </a>
        </div>
        <div class="col-sm-3">
          <div class="form-group file-upload">
            <div
              class="input-group file-input-group"
              data-controller="file-input"
            >
              <input
                class="form-control"
                type="text"
                placeholder=".xlsx file upload"
                readonly
                data-target="file-input.value"
              />
              <input
                type="file"
                class="form-control"
                id="customFile"
                name="file"
                accept=".xlsx"
                @change="changeExcelFile($event)"
              />
              <div class="input-group-append">
                <label class="btn btn-secondary mb-0" for="customFile"
                  >Browse</label
                >
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
                  id="teacherCheck"
                  v-model="selectAll"
                  title="Select All"
                /><label class="form-check-label font-12" for="teacherCheck"></label>
              </div>
              <div v-else>#</div>
            </th>
            <th class="w-80">Sr-no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th class="w-80">Gender</th>
            <th class="w-70">Age</th>
            <th class="w-80" style="width: 7%">Paid?</th>
            <th class="w-160">Email</th>
            <th class="w-160">Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
            <td class="text-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :value="data" :id="data.id" @change="checkedBox()" v-model="selected">
              </div>
            </td>
            <td class="text-center padding-top-10">
              {{data.srNo}}
            </td>
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
             <select class="form-control" :disabled="index != edit_index" v-model="data.gender">
                <option value="M">M</option>
                <option value="F">F</option>
             </select>
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
              <select class="form-control" v-model="data.is_paid" :disabled="index != edit_index">
                <option value="true">Paid</option>
                <option value="false">Free</option>
              </select>
            </td>
             <td>
              <input
                type="email"
                class="form-control"
                v-model="data.email"
                :readonly="index != edit_index"
              />
            </td>
            <td>
              <div class="row">
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    v-model="data.mobile"
                    :readonly="index != edit_index"
                  />
                </div>
                <div class="col-4 justify-content-end">
                  <div class="form-group action_item margin-top-11">
                    <img
                      v-if="index != edit_index"
                      class="edit mr-1"
                      :src="$gbiAssets+'/assets/front/icons/edit.png'"
                      @click="edit_row(index)"
                    />
                    <img
                      v-else
                      class="edit mr-1"
                      :src="$gbiAssets+'/assets/front/icons/update.png'"
                      @click="checkAndUpdateRow(data, index)"
                    />
                    <img
                      class="delete"
                      :src="$gbiAssets+'/assets/front/icons/delete.png'"
                      @click="delete_row(index, data.id);"
                    />
                  </div>
                </div>
              </div>
            </td>
            </tr>

            <tr v-for="(data, index) in new_row" :key="index">
              <td></td>
              <td class="text-center">{{data.srNo}}</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.first_name"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.last_name"
                />
              </td>
              <td>
                <select class="form-control" v-model="data.gender">
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </td>
              <td>
                <input type="number" class="form-control" v-model="data.age" />
              </td>
               <td>
                <select class="form-control" v-model="data.is_paid">
                  <option value="1">Paid</option>
                  <option value="0">Free</option>
                </select>
              </td>
               <td>
                <input type="email" class="form-control" v-model="data.email" />
              </td>
              <td>
                <div class="row">
                  <div class="col-sm-8">
                    <input type="number" class="form-control" v-model="data.mobile" />
                  </div>
                  <div class="col-sm-4 text-right pt-2">
                    <img
                      class="delete w-16"
                      :src="$gbiAssets+'/assets/front/icons/delete.png'"
                      @click="delete_new_row(index); lastSr-=1"
                    />
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

        <p class="text-danger font-weight-bold" v-if="this.error==true">{{ message }}</p>
      </div>

      <div class="row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center">
        <div class="col-sm-5 m-0 p-0">
          <button
            type="button"
            class="btn btn-default itrn_add_btn btn-info"
            @click="generatePdf"
          >DOWNLOAD PDF</button>
        </div>

        <div class="col-sm-5 m-0 p-0">
          <button
            type="button"
            class="btn btn-default itrn_add_btn btn-info"
            @click="checkAndSave()"
            :disabled="new_row_add == false"
          >UPDATE</button>
        </div>

        <div class="col-sm-2 add-row-input-button text-left mt-29">
          <div class="input-group mb-3">
            <input
            type="number"
            class="form-control"
            placeholder="Add Row.."
            v-model="row_input"
            style="border: solid 1px black; height: 40px;"
          />
            <div class="input-group-append">
              <button class="btn btn-info text-white pl-2" type="button" @click="add_row()">Go</button>
            </div>
          </div>          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import XLSX from "xlsx";
import GroupExcelUpload from "@/admin/mixins/GroupExcelUpload";
export default {
  name: "AddGroupTeacherExcelUpload",
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

     sendLoginCreds(){
      //console.log(this.selected);
      for (var i = 0; i < this.selected.length; i++) {
            axios
            .post("/api/groupmembers/send-member-login", this.selected[i], {
            })
            .then(response => {
              if (response.data == "error") {
                this.$swal.fire({
                  icon: 'warning',
                  title: "Error",
                  text: "Error Occured, Please Try Again.",
                });
              }
            })
            .catch(error => {
            });
        }
        this.$swal.fire(
          "Success",
          "Login Details Sent",
          "success"
        );
    },

     checkAndUpdateRow(data, index){

      if(this.checkFields(data) == false){
          return false;
      }
      this.update_row(index)
    },

    checkAndSave(){
      for (var i = 0; i < this.new_row.length; i++) {
          if(this.checkFields(this.new_row[i]) == false){
            return false;
          }
        }
        this.UserGroupSave();
    },

    checkFields(data){
        //console.log(data)
        if(!data.mobile || !data.email || !data.first_name || !data.last_name || !data.gender || !data.age || !data.is_paid){

          this.$toast.fire({
                  icon: "error",
                  title: "Please fillup all the fields.",
                });
          return false;
        }
        else if(String(data.mobile).length !== 10){
          this.$toast.fire({
                  icon: "error",
                  title: "Please provide a valid phone number.",
                });
          return false;
        }
        else if(this.checkEmail(data.email) == false){
            this.$toast.fire({
                icon: "error",
                title: "Please provide a valid email address.",
              });
          return false;
        }
    },

    checkEmail(emailID){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailID))
      {
        return (true)
      }
      return (false)
    },



    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.lastSr +=1;
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          srNo: this.lastSr,
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
          user_type: "teacher",
          is_paid: false,
        });
      }
      this.row_input = "";
    },
    groupMember() {
      axios
        .get(`/api/groupmembers/${this.$route.params.id}/teacher`)
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
                is_paid: false,
                user_type: "teacher",
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
  background: white !important;
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

th, td, input, select {
    font-size: 12px !important;
  }
</style>