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
              <div class="col-sm-3">
                <form class="search_button">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search" />
                    <div class="input-group-append">
                      <button class="btn" type="button">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-sm-5"></div>
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

            <!-- Table -->
            <div class="reservation_table" ref="content">
              <form class="form">
                <table class="table table-bordered" id="student_list_id">
                  <thead class="text-center">
                    <th>Sr.no</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Contact Number</th>
                  </thead>
                  <tbody>
                    <tr v-for="(data,index) in total_row" :key="index">
                      <td>{{ index+1 }}</td>
                      <td>
                        <input type="text" v-model="data.firstname" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.lastname" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.gender" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.phoneno" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.mode" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.status" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.payment" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.paid" class="form-control" />
                      </td>
                      <td>
                        <input type="text" v-model="data.cheque_no" class="form-control" />
                      </td>
                      <td class="delete_icon">
                        <i class="fas fa-trash-alt" @click="delete_row(index)"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            <!--  -->
            <div class="card student_card" v-for="data in total_row" :key="data.id">
              <div class="row">
                <div class="col-sm-3">
                  <label>First Name</label>
                  <input type="text" name="firstname" v-model="data.firstname" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Last Name</label>
                  <input type="text" name="lastname" v-model="data.lastname" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Gender</label>
                  <input type="text" name="gender" v-model="data.gender" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Contact Number</label>
                  <input type="text" name="phoneno" v-model="data.phoneno" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Mode</label>
                  <select class="form-control select-field" v-model="data.mode">
                    <option value="cash">Cash</option>
                    <option value="cheque">Cheque</option>
                    <option value="online">Online</option>
                    <option value="installment">Installment</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label>Status</label>
                  <select class="form-control select-field" v-model="data.status">
                    <option value="pending">Pending</option>
                    <option value="installment">Installment</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label>Payment</label>
                  <input type="text" name="payment" v-model="data.payment" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Paid</label>
                  <input type="text" name="paid" v-model="data.paid" class="form-control" />
                </div>
                <div class="col-sm-3">
                  <label>Cheque Number</label>
                  <input type="text" name="cheque_no" v-model="data.cheque_no" class="form-control" />
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="row reservation_bottom">
              <div class="col-sm-2">
                <div class="print">
                  <i class="fas fa-print"></i>
                </div>
              </div>
              <div class="col-sm-3">
                <button
                  type="button"
                  class="btn btn-default itrn_add_btn"
                  @click="demoFromHTML()"
                >DOWNLOAD PDF</button>
              </div>
              <div class="col-sm-3">
                <button
                  type="button"
                  class="btn btn-default itrn_add_btn"
                  @click="updateData()"
                >UPDATE</button>
              </div>
              <div class="col-sm-4">
                <label>Add Row</label>
                <input type="number" name="add_row" v-model="row_input" />
                <button type="button" class="btn btn_go" @click="add_row()" placeholder="0">GO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p id="post"></p>
  </section>
  <!-- /.content -->
</template>
<script>
import jsPDF from "jspdf";
import XLSX from "xlsx";
import { Form, HasError } from "vform";
export default {
  name: "List",
  components: { Form, "has-error": HasError },
  data() {
    return {
      row_input: "",
      excel_form: new Form({
        excel_file: ""
      }),
      output: "",
      total_row: [
        {
          firstname: "",
          lastname: "",
          gender: "",
          phoneno: "",
          mode: "",
          status: "",
          payment: "",
          paid: "",
          cheque_no: ""
        }
      ]
    };
  },
  // Get all the data
  created() {
    axios.get(`/student_list/${this.$route.params.id}`).then(response => {
      if (response.data.student) {
        var total = response.data.student;
        this.total_row = JSON.parse(total);
      }
    });
  },
  // End the process of the the fetching data
  methods: {
    // Download pdf
    demoFromHTML() {
      var doc = new jsPDF();
      console.log(this.total_row);
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";
      for (var i = 0; i <= this.total_row.length - 1; i++) {
        let current = this.total_row[i];
        string +=
          "FirstName : " +
          current.firstname +
          " , LastName : " +
          current.lastname +
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
    updateData() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["firstname"] == null) {
          this.total_row.splice(i, 1);
        }
      }
      console.log(this.total_row);
      var path = `/submit-student-list/${this.$route.params.id}`;
      axios
        .post(path, this.total_row)
        .then(response => {
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
          firstname: "",
          lastname: "",
          gender: "",
          phoneno: "",
          mode: "",
          status: "",
          payment: "",
          paid: "",
          cheque_no: ""
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
            if (Object.keys(main_data[i]).length == 4) {
              //this.total_row.push({firstname:'',lastname:'',gender:'',phoneno:''});
              var store = [];
              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }
              let row = {
                firstname: store[0],
                lastname: store[1],
                gender: store[2],
                phoneno: [3]
              };
              vm.total_row.push(row);
            }
          }
        };
        reader.readAsArrayBuffer(f);
      } else {
        swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
    UploadExcel() {
      var path = `/read_excel_file`;

      this.excel_form
        .post(path)
        .then(response => {
          var total = response.data;
          console.log(total);

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