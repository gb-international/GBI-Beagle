<template lang="pug">
<section>
.qkb-msg-bubble-component.qkb-msg-bubble-component--single-text
  .qkb-msg-bubble-component__text {{ mainData.text }}
</section>
</template>
<script>
export default {
  props: {
    mainData: {
      type: Object
    }
  }
}
</script>
