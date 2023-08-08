<template lang="pug">
<section>
	.qkb-board-header
	  slot(name="header")
	    .qkb-board-header__title {{ botTitle }}
</section>
</template>
<script>
export default {
  props: {
    botTitle: {
      type: String,
      default: 'Chatbot'
    }
  }
}
</script>
