<template>
  <!--************************************************
      Author:@Manas
  ****************************************************-->
  <div class="container mb-5 marG"> 

    <img  v-if="confirmed" class="img w-20 mr-2 link mb-2" :src="$gbiAssets+'/images/icons/back.png'" @click="confirmed = false"/>

      <section v-if="!confirmed" class="mt-4">
        <div class="row">
          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-3 col-md-10 col-sm-12 mr-1">
            <div class="input-group border-1">
              <div class="input-group-append">
                <span class="input-group-text border-0 rounded rounded-pill">School Name:</span>
              </div>
              <input type="text" placeholder="Enter School Name" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="school_name">
            </div>
          </div>

           <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-4 col-sm-12 mr-1">
            <div class="input-group border-1">
              <div class="input-group-append">
                <span class="input-group-text border-0 rounded rounded-pill">Group No:</span>
              </div>
              <input type="text" placeholder="Group Number" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="group_n">
            </div>
          </div>

          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-3 col-sm-6 mr-1">
            <div class="input-group border-1">
              <div class="input-group-append">
                <span class="input-group-text border-0 rounded rounded-pill">Teachers:</span>
              </div>
              <input type="number" placeholder="No. of Teachers" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="n_teachers"  min="0">
            </div>
          </div>

          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-3 col-sm-6">
            <div class="input-group border-1">
              <div class="input-group-append">
                <span class="input-group-text border-0 rounded rounded-pill">Students:</span>
              </div>
              <input type="number" placeholder="No. of Students" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="n_students"  min="0">
            </div>
          </div>
        </div> 

        <button type="submit" class="btn btn-info mt-3 mb-4 rounded rounded-pill shadow-sm px-5 py-2"  @click="confirmA()" style="font-size: 17px">Confirm</button>
      </section>

      <section v-else>
        <p class="mt-2 mb-4 HeadingT">How would you like to fillup the form?</p>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-info" @click="addRows()">Manually</button>
          <button type="submit" class="btn btn-warning" @click="uploadA()">Upload Excel</button>
        </div>
      </section>
      <div>
       <!-- <p class="mt-2 addRows">Add Rows</p> -->
      </div>
      <!-- <div class="row">
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-lg-4 col-6 com-sm-12">
          <div class="input-group">
            <input type="number" placeholder="Input number of rows" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="n_rows" min="1">
            <div class="input-group-append">
              <button id="button-addon1" type="submit" class="btn btn-link text-info" @click="insertRows()"><i class="fa fa-plus"></i></button>
            </div>
          </div>
        </div> 
      </div>  -->
     <div v-show="manually && confirmed"> 
      <div id="spreadsheet" ref="spreadsheet"></div>
          <div class="d-flex justify-content-between">
           <button type="submit" class="btn btn-danger" @click="deleteRows()">Delete Last Row</button>
            <button type="submit" class="btn btn-info"  @click="convertToExcel()">Submit</button>
          </div>  
      </div>
      <div v-show="uploadE && confirmed">
        <p class="my-4 HeadingQ">Please download the GBI Airlines Format and upload it below after filling up the details.</p>
      
        <a type="submit" class="btn btn-success mb-4 rounded rounded-pill shadow-sm px-4 py-2"  :href="`/assets/Tour_Form_.xls`" style="font-size: 18px">Download GBI Airlines Format</a>
        
        <p class="my-4 HeadingQ">Please upload the filled up excel sheet below.</p>
        <div class="col-sm-3">
          <div class="form-group file-upload">
            <div
              class="input-group file-input-group"
              data-controller="file-input"
            >
              <input
                class="form-control display-n"
                type="text"
                placeholder=".xls file upload"
                readonly
                data-target="file-input.value"
              />
              <input
                type="file"
                class="form-control display-n"
                id="customFile"
                name="file"
                accept=".xls"
                @change="changeExcelFile($event)"
              />
              <div class="input-group-append">
                <label class="btn btn-dark mb-4 rounded rounded-pill shadow-sm px-4 py-2" for="customFile"
                  >Upload Excel Sheet</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="bordR"> 
            <div class="NotE mt-3"> 
              <p>Note:</p>
              <ul>
                <li>Please note that once the names are submitted to us there will be no changes and the same names will be submitted to the airlines.</li>
                <li>The names entered by the school authorities should be as per the travellers Aadhaar card.</li>
              </ul>
            </div>
        </div>
      </div>
  </div>

</template>

<script>
// eslint-disable-line no-unused-vars

import jexcelStyle from "jexcel/dist/jexcel.css"; 
import jexcel from "jexcel";
//import jsPDF from "jspdf";
//import 'jspdf-autotable';
import S3 from 'aws-s3';
//import { uid } from 'uid';
import TableToExcel from "@linways/table-to-excel";


export default {
  name: "TempNameList",
  components: {
  },
  data() {
    return {
      n_rows: 1,
      school_name:"",
      n_teachers: "",
      n_students: "",
      group_n: "",
      confirmed: false,
      manually: false,
      uploadE: false,
      nameList: [
        [
          "Adult",
          "Mr",
          "Test",
          "Name",
          "01/01/1990",
          "Male",
          "test@test.com",
          "1234567890",
          "9904578901236"
        ],
        [
          "Adult",
          "Mr",
          "Test",
          "Name",
          "01/01/1990",
          "Male",
          "test@test.com",
          "1234567890",
          "9904578901236"
        ],
        [
          "Adult",
          "Mr",
          "Test",
          "Name",
          "01/01/1990",
          "Male",
          "test@test.com",
          "1234567890",
          "9904578901236"
        ],
        [], 
        [], 
        [], 
        [], 
        [], 
        [], 
        [],
      ]
    };
  },

  computed: {
    jExcelOptions() {
      return {
        data: this.nameList,
        columns: [
          {
            type: "dropdown",
            title: "PaxType",
            width: "100px",
            source: ["Adult", "Child", "Infant"]
          },
          {
            type: "dropdown",
            title: "Title",
            width: "120px",
            source: ["Mr", "Mrs", "Miss", "Master", "Dr"]
          },

          { type: "text", title: "First Name", width: "120px" },
          { type: "text", title: "Last Name", width: "120px" },

          { type: "calendar", title: "DOB", width: "150px" },

          {
            type: "dropdown",
            title: "Gender",
            width: "100px",
            source: ["Male", "Female"]
          },

          { type: "text", title: "Email", width: "120px" },
          { type: "numeric", title: "Phone", width: "120px" },
          { type: "numeric", title: "Aadhaar No.", width: "140px" },

        ]
      };
    }
  },
  mounted() {
   //console.log(this.jExcelOptions);
    //console.log(this.$refs["spreadsheet"]);
    const jExcelObj = jexcel(this.$refs["spreadsheet"], this.jExcelOptions);
    // Object.assign(this, jExcelObj); // pollutes component instance
    Object.assign(this, { jExcelObj }); // tucks all methods under jExcelObj object in component instance
    // console.log(this.jExcelObj);
    //const pdf2excel = require('pdf-to-excel');
  },

  methods: {

    convertToExcel(){
      let tbl = document.getElementById("spreadsheet")
      var xlBlob = new Blob([tbl], {
        type: 'application/xls'
      });
     // let xl = TableToExcel.tableToSheet(document.getElementById("spreadsheet"))
      //this.uploadS3(xl);
      console.log(TableToExcel)

    },
    changeExcelFile(event) {
      var vm = this;
      let file = event.target.files[0];
      this.uploadS3(file);
    },
    
    uploadA(){
      this.uploadE =  true
      this.manually = false
    },
    confirmA(){
      if(!this.school_name){
            this.$swal.fire("Invalid", "Please provide a valid school name", "warning")
            return
        }
      else if(!this.n_teachers){
            this.$swal.fire("Invalid", "Please provide a valid number of teachers", "warning")
            return
      } 
      else if(!this.n_students){
            this.$swal.fire("Invalid", "Please provide a valid number of students", "warning")
            return
      }
      else if(!this.group_n){
            this.$swal.fire("Invalid", "Please provide a valid group number", "warning")
            return
      }
      else {
         var val1 = parseInt(this.n_teachers) 
          var val2 = parseInt(this.n_students)
          var val = val1+val2-1

          this.jExcelObj.insertRow(val)
          this.confirmed = true
      }
    },
    addRows() {
      //console.log(this.nameList);
      // this.spreadsheet.insertRow();
       this.manually = true
       this.uploadE = false
    },
     insertRows() {
      console.log(this.nameList)
      // this.spreadsheet.insertRow();
      var val = parseInt(this.n_rows)
      this.jExcelObj.insertRow(val)
    },
    deleteRows() {
      //console.log(this.n_rows);
      // this.spreadsheet.insertRow();
      this.jExcelObj.deleteRow()
    },
    generatePdf() {
            if(!this.school_name){
              this.$swal.fire("Invalid", "Please provide a valid school name", "warning")
              return
            }
            var doc = new jsPDF('p', 'pt', 'A4');
            var margins = { top: 10, bottom: 10, left: 10, width: 810 };
            var data = [];
            //let j = 1;
            for (let i = 0; i < this.nameList.length; i++) {
                let d = this.nameList[i];
                let rows = [
                    i+1, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9]
                ];
                data.push(rows);
            }
            let t1= doc.autoTable({
                head: [['S.No', 'PaxType', 'Title', 'First Name', 'Last Name', 'DOB', 'Gender', 'Email', 'Phone', 'Aadhaar No.']],
                body: data,
            })
            //console.log(doc.output('blob'))
            var blob = new Blob(t1, {
              type: "application/xls"
            });
            this.uploadS3(blob)
            //console.log(doc.output())
        },
    uploadS3(file){
      const config = {
        bucketName: 'gbi-assets',
        dirName: 'TourForms', /* optional */
        region: 'ap-south-1',
        accessKeyId: 'AKIAVIFUIYYPGWBBML4K',
        secretAccessKey: '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',
        //ContentType: "application/vnd.ms-excel"
        //s3Url: 'https://gbi-assets.s3.ap-south-1.amazonaws.com/TourForms', /* optional */
      }

    const S3Client = new S3(config);
    /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
    var val1 = parseInt(this.n_teachers) 
    var val2 = parseInt(this.n_students)
    var pax = val1+val2
    
    const newFileName = this.school_name+ '_group-' +this.group_n+'_pax-'+pax ;

    S3Client
        .uploadFile(file, newFileName)
        .then(
           //data => console.log(data)
           this.$swal.fire("Thank You", "Form was submitted", "success"),
           //window.open("https://gbi-assets.s3.ap-south-1.amazonaws.com/TourForms/"+newFileName, '_blank')
          )
        /*.catch(
          //err => console.error(err)
          this.$swal.fire("Error", "Form submission failed, please try again", "warning")
        )*/

      /**
       * {
       *   Response: {
       *     bucket: "your-bucket-name",
       *     key: "photos/image.jpg",
       *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
       *   }
       * }
       */
    }
  }
}
</script>


<style scoped>
.addRows {
  font-size: 14px; 
  font-weight: 600; 
  font-family: Raleway
}
.HeadingT {
  font-size: 18px; 
  font-weight: 600; 
  font-family: Raleway
}
.HeadingQ {
  font-size: 15px; 
  font-weight: 600; 
  font-family: Raleway
}
.marG{
  margin-bottom: 38vh !important;
}
.display-n{
  display: none;
}
.bordR{
  border-top: solid 2px black;
}
.NotE{
  font-size: 15px; 
  font-weight: 600; 
  font-family: Raleway;
  color: red;
}
</style>
