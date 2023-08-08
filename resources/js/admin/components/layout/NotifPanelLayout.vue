<!--
This Template is for listing for the Notification Panel.
-->
<template>
  <section class="content">
    <!--************************************************
    Template Type: Notification Panel
    Author:@Manas
    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12 pb-5">
        <div class="container container_admin_body list-section pb-5">
          <b-row class="mb-1 mt-1" align-h="between">
              <b-col cols="3"  class="p-0 pb-2">
                <!-- Slot for Display Type -->
                <slot name="displayType"></slot>
              </b-col>
          </b-row>
          <b-row class="mb-1 mt-1" align-h="between">
              <b-col cols="2" class="p-0">
                <!-- Slot for Category Dropdown -->
                <slot name="category"></slot>
              </b-col>
              <b-col cols="2" class="p-0">
                <!-- Slot for Status Dropdown -->
                <slot name="status"></slot>
              </b-col>
              <b-col cols="2"  class="p-0">
                <!-- Slot for Service Dropdown -->
                <slot name="service"></slot>
              </b-col>
              <b-col cols="2"  class="p-0">
                <!-- Slot for Service Dropdown -->
                <slot name="timeSpan"></slot>
              </b-col>
          </b-row>
          <b-row class="text-capitalize">
              <!-- Table data -->
            <slot name="table"></slot>

            <div class="w-100">
              <slot name="pagination"></slot>
            </div>

          </b-row>
        </div>
        <div class="container container_admin_body list-section pb-5">
         <slot name="graph"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddButton from '@/admin/components/buttons/AddButton.vue';
export default {
  name:"NotifPanelLayout",
  components:{
    'add-button':AddButton
  },
  props:['addurl','buttontext'],
}
</script>