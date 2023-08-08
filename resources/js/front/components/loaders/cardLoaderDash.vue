<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
      components: {
        VueContentLoading,
      },
    };
  </script>

  <template>
    <vue-content-loading :width="300" :height="290">
      <rect y="30" r="30" width="300" height="180"/>
      <rect y="225" width="135" height="12" />
      <rect y="250" width="90" height="10" />
      <rect y="270" width="90" height="10" />
      <rect y="290" width="90" height="10" />
    
    <rect x="197" y="255" rx="0" ry="0" width="91" height="35" /> 
    
    </vue-content-loading>
  </template>