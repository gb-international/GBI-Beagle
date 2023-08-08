<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
      components: {
        VueContentLoading,
      },
    };
  </script>

  <template>
    <vue-content-loading :width="270" :height="110">
    
    <rect x="10" y="0" rx="0" ry="0" width="250" height="8" /> 
    <rect x="10" y="15" rx="0" ry="0" width="200" height="8" /> 
    <rect x="10" y="30" rx="0" ry="0" width="100" height="8" /> 
    <rect x="10" y="50" rx="0" ry="0" width="65" height="65" />

    </vue-content-loading>
  </template>