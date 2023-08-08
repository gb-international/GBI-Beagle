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
      <rect y="30" r="30" width="300" height="180"/>
      <rect x="50" y="225" width="200" height="12" />
      <rect y="250" width="300" height="10" />
      <rect y="270" width="300" height="10" />
      <rect y="290" width="300" height="10" />
    </vue-content-loading>
  </template>