<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">

      <div class="row mb-10">
        <!-- <div class="col-sm-1">
          <button type="button" class="btn btn-sm btn-info">Back</button>
        </div>-->
        <div class="col-sm-12 col-md-12 col-lg-6 pt-2">
          <button type="button" class="btn btn-sm btn-dark" @click="back()">Back</button>
          <button
            type="button"
            class="btn btn-sm btn-primary"
            data-toggle="modal"
            data-target="#AddRowModal"
          >ADD Number of person</button>

          <a class="text-gray ml-2" :href="`/assets/sample-group-list.xlsx`" download>
            <img src="/images/icons/download.png" class="icon-width"> Name list formate
          </a>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <form method="POST">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label for="file" class="sr-only">File</label>
                  <div class="input-group">
                    <input
                      type="text"
                      name="filename"
                      class="form-control h-40"
                      placeholder="Upload Excel File e.g. '.xlsx'"
                      readonly
                    />
                    <span class="input-group-btn">
                      <div class="btn btn-default custom-file-uploader">
                        <input
                          type="file"
                          onchange="this.form.filename.value = this.files.length ? this.files[0].name : ''"
                          accept=".xlsx"
                          @change="changeExcelFile($event)"
                        />Browse
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="search-box">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
            </div>
          </div>
        </div>

      </div>

      <div class="row group_list w-100" v-if="resultQuery">
        <table class="table table-hover add_group_table text-dark table-responsive">
          <thead class="w-100">
            <th>Sr.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
              <td>{{ index+1 }}</td>
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
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      v-model="data.mobile"
                      :readonly="index != edit_index"
                    />
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group action_item">
                      <img
                        v-if="index != edit_index"
                        class="edit"
                        :src="`/assets/front/icons/edit.png`"
                        @click="edit_row(index)"
                      />
                      <img
                        v-else
                        class="edit"
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
              <td>{{ index+1 }}</td>
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
                <input type="number" class="form-control" v-model="data.age" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="data.mobile" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="row w-100 justify-content-center mt-4">
          <div class="col-sm-1 text-right">
            <p class="text-dark print" title="print">
              <i class="fas fa-print"></i>
            </p>
          </div>
          <div class="col-sm-4 text-center">
            <button
              type="button"
              class="btn btn-sm btn-primary ml-10"
              @click="downloadPDF()"
            >DOWNLOAD PDF</button>

            <button
              type="button"
              class="btn btn-sm btn-primary ml-10"
              v-if="submit_btn == true"
              @click="UserTourSave()"
            >Submit</button>
          </div>
        </div>
      </div>

    </div>
    <!-- Add Row Modal -->
    <div class="modal fade" id="AddRowModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p>Add Number of Person</p>
            <div class="form-group">

              <div class="row align-content-center">
                <div class="col">
                  <img src="/images/icons/minus.png" @click="down" class="w-40 link">
                </div>                
                <div class="col">{{ row_input }}</div>                
                <div class="col">
                  <img src="/images/icons/add.png" @click="up" class="w-40 link">
                </div>
              </div>
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
export default {
  name: "AddGroup",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      searchQuery: null,
      row_input: 1,
      submit_btn: false,
      edit_index: -1,
      total_row: "",
      new_row: [],
      excel_form: new Form({
        excel_file: "",
      }),
    };
  },

  mounted() {
    this.groupMember();
  },

  watch: {
    row_input: function () {
      if (this.row_input > 0) {
        this.submit_btn = true;
      }
    },
  },

  methods: {
    up() {
      this.new_row.push({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        mobile: "",
        tour_id: this.$route.params.id,
      });
      this.row_input++;
    },
    
    down() {
      if(this.new_row.length >= 1){
        this.new_row.splice(-1);
        this.row_input--;
        console.log('hi');
      }
    },

    groupMember() {
      var data = { tour_id: this.$route.params.id };
      this.$api.POST("/api/group-member", data)
        .then((response) => {
          this.total_row = response;
        })
    },
    // Delete Row
    delete_row(index, id) {
      //
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            var data = { id: id };
            this.$api.POST("/api/destroy-member", data)
              .then((response) => {
                this.total_row.splice(index, 1);
              })
              .catch((error) => {
                this.handleError(error);
              });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    edit_row(index) {
      this.edit_index = index;
    },
    update_row(index) {
      this.UserTourUpdate(this.total_row[index]);
      this.edit_index = "";
    },
    UserTourUpdate(data) {
      this.$api.POST("/api/group-member-update", data)
        .then((response) => {
          if (response == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.edit_index = -1;
            this.$swal.fire("Success", "Member updated !!!", "success");
            // this.tourListData();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    UserTourSave() {
      for (var i = this.new_row.length - 1; i >= 0; i--) {
        if (this.new_row[i]["first_name"] == "") {
          this.new_row.splice(i, 1);
        }
      }

      this.$api.POST("/api/group-add", this.new_row)
        .then((response) => {
          if (response == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire("Success", "Group data has added", "success");
            this.new_row = [];
            this.submit_btn = false;
            this.groupMember();
          }
        })
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
          console.log(main_data);
          for (var i = 0; i < main_data.length; i++) {
            let row = {
              first_name: main_data[i]["first_name"],
              last_name: main_data[i]["last_name"],
              email: main_data[i]["email"],
              gender: main_data[i]["gender"],
              age: main_data[i]["age"],
              mobile: main_data[i]["mobile"],
              tour_id: vm.$route.params.id,
            };
            vm.new_row.push(row);
            vm.submit_btn = true;
          }
          // vm.new_row.splice(0, 1);
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },

    downloadPDF() {
      console.log("create pdf here");
    },
    back() {
      this.$router.push("/tour-list");
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.total_row.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.first_name.toLowerCase().includes(v));
        });
      } else {
        return this.total_row;
      }
    },
  },
};
</script>
