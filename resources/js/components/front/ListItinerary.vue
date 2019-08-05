<!-- List all itinerary template -->
<template>
	<div id="listitinerary">
		<div class="container">
      <div class="col-xs-12">
        <div>
                      <button class="button btn-xs btn-success" @click="addRow">+</button>
                  </div>
                  <table>
                     <tbody>
                      <tr v-for="(row, index) in rows" :row="row">
                          <td>
                              <input type="text" class="form-control nopadding text-center" v-model="row[0]">
                          </td>
                          <td>
                              <input type="text" class="form-control nopadding text-center">
                          </td>
                          <td>
                              <input type="text" class="form-control nopadding text-center">
                          </td>
                          <td>
                              <input type="text" class="form-control nopadding text-center">
                          </td>
                          <td>
                            <button type="button" class="text-center button btn-xs btn-danger" v-on:click="removeRow(index)">-</button>
                          </td>
                      </tr>
                    </tbody>
                  </table>
       
      </div>
    </div>
	</div>
	
</template>

<script>
	export default {
        name: "ListItinerary",
         data(){

            return {
              // Create a new form instance
              rows: [{
		        row: []
		      }]
            }
        },
        methods:
        {
           addRow() {
	        this.rows.push({
	          row: []
	        });
	      },
	      removeRow: function(index) {
	        console.log("Removing", index);
	        this.rows.splice(index, 1);
	      }          
           
        }
    }
</script>
<style scoped></style>