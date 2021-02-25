<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div>
    <select class="form-control select-field" v-model="selectedCity" v-on:change="optionChanged">
      <option disabled>Please Select City</option>
      <option v-for="city in list" :key="city.id" :value="city.name">{{ city.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CitySelect",
  data() {
    return {
      list: [],
      selectedCity: ""
    };
  },
  created() {
    axios.get("/api/city").then(response => {
      this.list = response.data.data;
    });
  },
  methods: {
    optionChanged() {
      this.$emit("update:option", this.selectedCity);
    }
  }
};
</script>
