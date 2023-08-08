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
      <rect y="225" width="135" height="12" />
      <rect y="250" width="90" height="10" />
      <rect y="270" width="90" height="10" />
      <rect y="290" width="90" height="10" />
    
     <rect x="6" y="315" rx="0" ry="0" width="33" height="35" /> 
    <rect x="197" y="315" rx="0" ry="0" width="91" height="35" /> 
    <rect x="46" y="315" rx="0" ry="0" width="33" height="35" /> 
    <rect x="87" y="315" rx="0" ry="0" width="33" height="35" /> 
    <rect x="124" y="315" rx="0" ry="0" width="33" height="35" />
    
    </vue-content-loading>

    <!-- 
        <rect x="78" y="41" rx="3" ry="3" width="273" height="9" /> 
    <rect x="80" y="58" rx="3" ry="3" width="273" height="9" /> 
    <rect x="90" y="109" rx="0" ry="0" width="97" height="94" /> 
    <rect x="79" y="78" rx="3" ry="3" width="273" height="9" />
    -->
  </template>