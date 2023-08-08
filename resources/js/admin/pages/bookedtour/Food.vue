
<template>
  <div class="pt-4">
    <div class="pl-3  top_btn text-uppercase font-weight-bold">
      <a
        href="#"
        class="pointer text-white"
        data-toggle="modal"
        data-target="#foodModal"
        @click="foodModal()"
        >NEW FOOD</a>
    </div>
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
          primary-key="id"
        >
          <template #table-busy>
            <table-loader />
          </template>

          <template #cell(action)="data">
            <span
              data-toggle="modal"
              data-target="#foodModal"
              @click="editFood(data.item, data.index)"
              class="edit_link pointer"
            >
              <span class="badge badge-primary" title="View Itinerary"
                ><i class="fas fa-pencil-alt"></i
              ></span>
            </span>
            <delete-icon 
              @click.native="deleteItem(data.item.id,data.index)"
              >
            </delete-icon>

          </template>
        </b-table>

        <!--Food Modal -->
        <div class="modal" id="foodModal">
          <div class="modal-dialog">
            <div class="modal-content simple-form-bg">
              <!-- Modal body -->
              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <p>Add New Food</p>
                <form @submit.prevent="submitForm()">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.name"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                    />
                    <has-error :form="form" field="name"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="name">Quantity</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="form.quantity"
                      :class="{ 'is-invalid': form.errors.has('quantity') }"
                    />
                    <has-error :form="form" field="quantity"></has-error>
                  </div>
                  <div class="w-100 text-center">
                    <button
                      type="submit"
                      v-if="editid == ''"
                      class="btn itrn_add_btn"
                    >
                      SAVE
                    </button>
                    <button
                      type="button"
                      v-if="editid != ''"
                      class="btn itrn_add_btn"
                      @click="updateFood()"
                    >
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </list-layout>
  </div>
</template>

<script>
import listLayout from "@/admin/components/layout/ListLayout.vue";
import DeleteIcon from "@/admin/components/icons/DeleteIcon.vue";
import TableLoader from "@/admin/components/TableLoader.vue";
import { Form, HasError } from "vform";
import { mapState } from "vuex";

export default {
  name: "ListFood",
  components: {
    "list-layout": listLayout,
    "table-loader": TableLoader,
    "delete-icon": DeleteIcon,
    Form,
    "has-error": HasError,
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "NAME",
          sortable: true,
          thClass: "table-head",
        },
        {
          key: "quantity",
          label: "AMOUNT",
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
      form:new Form({
        name: "",
        quantity: "",
        tour_id: this.$route.params.tour_id,
        tour_code: this.$route.params.tour_code,
      }),
      editid: "",
      updateindex: "",
    };
  },
  mounted() {
    this.getitems();
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    getitems() {
      let tour_code = this.$route.params.tour_code;
      this.$store.dispatch("getItems", "/foods/" + tour_code);
    },
    deleteItem(id, index = -1) {
      let payload = { api: "/foods/" + id, index, index: index };
      this.$store.dispatch("deleteItem", payload);
    },
    editFood(food, index) {
      this.form.fill(food);
      this.editid = food.id;
      this.updateindex = index;
    },
    foodModal() {
      this.form.name = "";
      this.form.quantity = "";
      this.editid = "";
      this.updateindex = "";
    },
    updateFood() {
      this.form
        .patch(`/api/foods/${this.editid}`)
        .then((res) => {
          this.getitems();
          this.$swal.fire("Success", "Successfully updated !!!", "success");
          $(".close").click();
        })
        .catch(() => {});
    },
    submitForm() {
      this.form
        .post(`/api/foods`)
        .then((res) => {
          this.getitems();
          $(".close").click();
          this.$swal.fire("Success", "Successfully Added !!!", "success");
        })
        .catch(() => {});
    },
  },
};
</script>


