<!--
This Template is for listing for the Category profile using function to get the 
data from the api to display the data about the Category from the backend .
-->
<template>
  <div>
    <list-layout>
      <template #searchbar>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Type to Search"
          class="radius-0"
        ></b-form-input>
      </template>
      <template #table>
        <b-table
          id="table-transition"
          striped
          hover
          outlined
          sticky-header="460px"
          class="w-100 table-layout"
          :fields="fields"
          :items="items.data"
          :busy="$store.getters.isBusy"
          :filter="filter"
          primary-key="updated_at"
        >
          <template #table-busy>
            <table-loader />
          </template>
          <template #cell(payment)="data">
            <p v-if="data.item.payment != null">
              <span
                v-if="data.item.payment == 'success'"
                class="badge badge-success"
                >Success</span
              >
              <span class="badge badge-default" v-else>Pending</span>
            </p>
            <span class="badge badge-default" v-else>Pending</span>
          </template>
          <template #cell(action)="data">

            <edit-icon v-if="data.item.paid_by=='student'" :url="`/bookedusers/${data.item.id}`"></edit-icon>
            <delete-icon @click.native="deleteItem(data.item.id, data.index)">
            </delete-icon>
            <view-icon :url="`/bookedusers-view/${data.item.id}`"></view-icon>
          </template>
        </b-table>
      </template>
    </list-layout>
  </div>
</template>

<script>

import listLayout from "@/admin/components/layout/ListLayout.vue";
import DeleteIcon from "@/admin/components/icons/DeleteIcon.vue";
import ViewIcon from "@/admin/components/icons/ViewIcon.vue";
import EditIcon from "@/admin/components/icons/EditIcon.vue";
import TableLoader from "@/admin/components/TableLoader.vue";
import { mapState } from "vuex";

export default {
  name: "List",
  components: {
    "list-layout": listLayout,
    "table-loader": TableLoader,
    "delete-icon": DeleteIcon,
    "view-icon": ViewIcon,
    "edit-icon": EditIcon,
  },
  data() {
    return {
      fields: [
        {
          key: "user.name",
          label: "NAME",
          sortable: true,
          thClass: "table-head",
        },

        {
          key: "payment",
          label: "STATUS",
          sortable: true,
          thClass: "table-head",
        },
        
        {
          key: "user_type",
          label: "USER TYPE",
          sortable: true,
          thClass: "table-head",
        },

        {
          key: "updated_at",
          label: "LAST UPDATE",
          sortable: true,
          thClass: "table-head",
        },
        { key: "action", label: "ACTION", thClass: "table-head" },
      ],
      filter: "",
      perPage: 7,
      options: [7, 25, 50, 100],

      form: {
        id: 0,
        total_tour_price: "",
        collect_amount: "",
        status: "pending",
      },
    };
  },
  mounted() {
    this.getitems();
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    getitems(page = 1, size = this.perPage) {
      let tour_code =  this.$route.params.tour_code;       
      this.$store.dispatch('getItems','/bookedusers/'+tour_code);
    },
    deleteItem(id, index = -1) {
      let payload = { api: "/bookedusers/" + id, index, index: index };
      this.$store.dispatch("deleteItem", payload);
    }
  },
};
</script>
