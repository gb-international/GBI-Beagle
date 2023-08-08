<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
      components: {
        VueContentLoading,
      },
    };
  </script>

  <template>
    <vue-content-loading :width="300" :height="200">
      <rect y="30" r="30" width="300" height="200"/>
    </vue-content-loading>
  </template>