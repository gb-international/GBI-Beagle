<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
      components: {
        VueContentLoading,
      },
    };
  </script>

  <template>
    <vue-content-loading :width="300" :height="350">
      <rect y="30" r="30" width="300" height="350"/>
    </vue-content-loading>
  </template>