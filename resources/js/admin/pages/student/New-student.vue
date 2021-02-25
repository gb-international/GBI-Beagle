<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Reservation List
      Author:@Ajay

    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="reservation">
            <div class="row student_reservation">
              <!-- <div class="col-sm-3">
                      <form class="search_button">
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Search">
                          <div class="input-group-append">
                            <button class="btn" type="button"><i class="fas fa-search"></i></button>
                          </div>
                        </div>
                      </form>
                    </div>
              -->
              <div class="col-sm-5">
                <div class="form-group">
                  <label>SELECT SCHOOL</label>
                  <select class="form-control select-field" v-model.lazy="school_id">
                    <option
                      v-for="data in school_list"
                      :value="data.id"
                      :key="data.id"
                    >{{ data.school_name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-3"></div>
              <div class="col-sm-4">
                <form method="POST">
                  <div class="row">
                    <div class="col-lg-12">
                      <label>Student List</label>
                      <div class="form-group">
                        <label for="file" class="sr-only">File</label>
                        <div class="input-group">
                          <input
                            type="text"
                            name="filename"
                            class="form-control"
                            placeholder="Upload Excel File e.g. '.xlsx'"
                            readonly
                          />
                          <span class="input-group-btn">
                            <div class="btn btn-default custom-file-uploader">
                              <input
                                type="file"
                                name="file"
                                onchange="this.form.filename.value = this.files.length ? this.files[0].name : ''"
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
            </div>

            <div class="container reservation_table" id="student_list">
              <div class="card" v-for="(data,index) in total_row" :key="data.id">
                <form class="form">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">First Name</label>
                        <input type="text" v-model="data.first_name" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Last Name</label>
                        <input type="text" v-model="data.last_name" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Gender</label>
                        <input type="text" v-model="data.gender" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Father Name</label>
                        <input type="text" v-model="data.father_name" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Email</label>
                        <input type="email" v-model="data.email" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Mobile</label>
                        <input type="text" v-model="data.mobile" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Alternate Mobile</label>
                        <input type="text" v-model="data.alternate_mobile" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">DOB</label>
                        <input type="text" v-model="data.dob" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Class</label>
                        <input type="text" v-model="data.class" class="form-control" />
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="first_name">Address</label>
                        <input type="text" v-model="data.address" class="form-control" />
                      </div>
                    </div>
                    <div class="col justify-content-end">
                      <div class="form-group">
                        <p class="delete_icon">
                          <i class="fas fa-trash-alt" @click="delete_row(index)"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Buttons -->
            <div class="row reservation_bottom">
              <div class="col-sm-2">
                <div class="print">
                  <i class="fas fa-print"></i>
                </div>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-default itrn_add_btn"
                  @click="demoFromHTML()"
                >DOWNLOAD PDF</button>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-default itrn_add_btn" @click="addData()">SUBMIT</button>
              </div>
              <div class="col-sm-3">
                <label>Add Row</label>
                <input type="number" name="add_row" v-model="row_input" />
                <button type="button" class="btn btn_go" @click="add_row()" placeholder="0">GO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>
<script>
import jsPDF from "jspdf";
import XLSX from "xlsx";
import { Form, HasError } from "vform";
export default {
  name: "NewStudent",
  components: { Form, "has-error": HasError },
  data() {
    return {
      school_id: 0,
      school_list: [],
      row_input: "",
      excel_form: new Form({
        excel_file: ""
      }),
      output: "",
      total_row: [
        {
          first_name: "",
          last_name: "",
          gender: "",
          father_name: "",
          email: "",
          mobile: "",
          alternate_mobile: "",
          dob: "",
          class: "",
          address: ""
        }
      ]
    };
  },
  // Get all the data
  created() {
    axios.get(`/api/school`).then(response => {
      if (response.data) {
        this.school_list = response.data.data;
      }
    });
  },
  // End the process of the the fetching data
  methods: {
    // Download pdf
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
          " , Contact : " +
          current.phoneno +
          "\n";
      }
      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },
    /// End download pdf code

    // Update form data
    addData() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["first_name"] == null) {
          this.total_row.splice(i, 1);
        }
      }

      if (this.school_id == 0) {
        this.$toast.fire({
          icon: "error",
          title: "Please Select School !!!"
        });
        return false;
      }

      this.total_row.push({ school_id: this.school_id });
      var path = `/api/student`;
      axios
        .post(path, this.total_row)
        .then(response => {
          this.$router.push("/students");
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!"
          });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
    // End update form data
    // Add add_row() add the row in the form with 4 inputs
    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          first_name: "",
          last_name: "",
          gender: "",
          father_name: "",
          email: "",
          mobile: "",
          alternate_mobile: "",
          dob: "",
          class: "",
          address: ""
        });
      }
      this.row_input = "";
    },
    // End add_row() function
    // Upload excell file to the laravel controller

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
          for (var i = 0; i < main_data.length; i++) {
            // going through each row
            // if one row consist 4 columns
            if (Object.keys(main_data[i]).length == 10) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];
              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }

              // console.log(this.ExcelDateToJSDate(store[7]));
              var serial = store[7];
              var utc_days = Math.floor(serial - 25569);
              var utc_value = utc_days * 86400;
              var date_info = new Date(utc_value * 1000);

              var fractional_day = serial - Math.floor(serial) + 0.0000001;

              var total_seconds = Math.floor(86400 * fractional_day);

              var seconds = total_seconds % 60;

              total_seconds -= seconds;

              var hours = Math.floor(total_seconds / (60 * 60));
              var minutes = Math.floor(total_seconds / 60) % 60;

              var date =
                date_info.getDate() +
                "-" +
                date_info.getMonth() +
                "-" +
                date_info.getFullYear();
              let row = {
                first_name: store[0],
                last_name: store[1],
                gender: store[2],
                father_name: store[3],
                email: store[4],
                mobile: store[5],
                alternate_mobile: store[6],
                dob: date,
                class: store[8],
                address: store[9]
              };
              vm.total_row.push(row);
              console.log(date);
            }
          }
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },

    UploadExcel() {
      var path = `/read_excel_file`;

      this.excel_form
        .post(path)
        .then(response => {
          var total = response.data;
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!"
          });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
    // Delete Row
    delete_row(index) {
      this.total_row.splice(index, 1);
    }
  }
};
</script>
