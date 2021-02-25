<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
    Template Type: Category List
    Author:@Ajay
    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body list-section">

          <b-row class="mb-1 mt-1" align-h="between">
              <b-col md="3" cols="4"  class="top_btn p-0">
                <div v-if="addurl">
                  <add-button :url="addurl">{{ buttontext }}</add-button>
                </div>
              </b-col>
              <b-col cols="2"></b-col>
              <b-col cols="3" class="p-0">
                  <!-- Slot for perpage item view -->
                <slot name="perpage"></slot>
              </b-col>
              <b-col md="3" cols="4" class="p-0">
                  <!-- Slot for search item -->
                <slot name="searchbar"></slot>
              </b-col>
          </b-row>
          <b-row>
              <!-- Table data -->
            <slot name="table"></slot>

            <div class="w-100">
              <slot name="pagination"></slot>
            </div>

          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddButton from '@/admin/components/buttons/AddButton.vue';
export default {
  components:{
    'add-button':AddButton
  },
  props:['addurl','buttontext'],
}
</script>