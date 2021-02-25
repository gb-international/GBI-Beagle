<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10">
        <div class="col">
          <button type="button" class="btn btn-primary add_row_modal" data-toggle="modal"
          data-target="#AddRowModal">ADD Number of person</button>
        </div>
        <div class="col">
          <a class="text-dark" :href="`/assets/sample-group-list.xlsx`" download><img src="/images/icons/download.png" class="icon-width"> GBI name list formate</a>
        </div>

        <div class="col">
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
        <div class="col">
          <div class="search-box">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" v-model="searchQuery" placeholder="Search">
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <table class="table table-hover add_group_table text-dark">
          <thead>
            <th>Sr.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Contact No.</th>
          </thead>
          <tbody v-if="preivew == false">

            <tr  v-for="(data,index) in resultQuery" :key="data.id">
              <td>{{ index+1 }}</td>
              <td>
                <input v-if="index == 0" type="text" class="form-control" v-model="data.first_name"  @focus="openModel()">
                <input v-else type="text" class="form-control" v-model="data.first_name">
              </td>
              <td><input type="text" class="form-control" v-model="data.last_name"></td>
              <td><input type="text" class="form-control" v-model="data.email"></td>
              <td><input type="text" class="form-control" v-model="data.gender"></td>
              <td><input type="text" class="form-control" v-model="data.mobile"></td>
            </tr>

          </tbody>
          
          <tbody v-else>

            <tr  v-for="(data,index) in resultQuery" :key="data.id">
              <td>{{ index+1 }}</td>
              <td>{{ data.first_name }}</td>
              <td>{{ data.last_name }}</td>
              <td>{{ data.email }}</td>
              <td>{{ data.gender }}</td>
              <td>
                <div class="row">
                  <div class="col-8">
                    {{ data.mobile }}
                  </div>
                  <div class="col-4 justify-content-end">
                    <div class="form-group">
                      <p class="delete_icon">
                        <i class="fas fa-trash-alt text-danger" @click="delete_row(index)"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="row w-100 justify-content-center">
          <button type="button" @click="preivew = !preivew" class="btn btn-primary">
            <span v-if="preivew == false">Preview</span>
            <span v-if="preivew == true">Add Group Members</span>
          </button>

          <button type="button" class="btn btn-primary ml-10" v-if="preivew == true" @click="UserTourSave()">Submit</button>
        </div>        
      </div>
    </div>

    <!-- Add Row Modal -->
    <div class="modal fade" id="AddRowModal">
      <div class="modal-dialog modal-md">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p>Add Number of Persion</p>
            <div class="form-group">
              <label for="no_row">Enter Number</label>
              <input type="number" class="form-control p-20" v-model="row_input">
            </div>
            <p class="text-center"><button type="button" class="btn btn-info" @click="add_row">ADD</button></p>
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
      row_input:1,
      modal_auto:false,
      preivew:false,
      searchQuery: null,
      excel_form: new Form({
        excel_file: ""
      }),
      total_row: [
        {
          first_name: "",
          last_name: "",
          email:"",
          gender: "",
          mobile: "",
          tour_id:this.$route.params.id,
        }
      ]
    };
  },

  methods: {
    openModel(){
      if(this.modal_auto == false){
        window.$(".add_row_modal").click();
        this.modal_auto = true;
      }
    },
     add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          first_name: "",
          last_name: "",
          email:"",
          gender: "",
          mobile: "",
          tour_id:this.$route.params.id,
        });
      }
      this.row_input = "";
    },

    // Delete Row
    delete_row(index) {
      this.total_row.splice(index, 1);
    },
    UserTourSave() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["first_name"] == "") {
          this.total_row.splice(i, 1);
        }
      }
      this.$axios
        .post("/api/group-add", this.total_row, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: 'error',
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Success",
              "Group data has added",
              "success"
            );
            // this.tourListData();
          }
        })
        .catch(error => {
          this.handleError(error);
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
        reader.onload = function(event) {
          var data = new Uint8Array(event.target.result);
          var workbook = XLSX.read(data, { type: "array" });
          let sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */
          let worksheet = workbook.Sheets[sheetName];
          var main_data = XLSX.utils.sheet_to_json(worksheet);
          console.log(main_data[0]);
          for (var i = 0; i < main_data.length; i++) {
            let row = {
                first_name: main_data[i]['first_name'],
                last_name: main_data[i]['last_name'],
                email:main_data[i]['email'],
                gender: main_data[i]['gender'],
                age: main_data[i]['age'],
                mobile: main_data[i]['mobile'],
                tour_id:vm.$route.params.id,
              };
            vm.total_row.push(row);
          }
          vm.total_row.splice(0, 1);
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.total_row.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.first_name.toLowerCase().includes(v));
        });
      } else {
        return this.total_row;
      }
    }
  }
};
</script>
