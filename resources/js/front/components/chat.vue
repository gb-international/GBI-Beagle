<template>
      <!--************************************************
      Author:@Manas
      ****************************************************-->
  <section class="absolute chatFace">
   <VueBotUI
    :messages="data"
    :options="botOptions"
    @msg-send="messageSendHandler"
    @destroy="toggleImg"
  >
    <template #bubbleButton>
      <img v-if="!botActive" @click="toggleImg" :src="botImg" style="background: transparent !important;" />
    </template>
  </VueBotUI>
  </section>
</template>
<script>
import { VueBotUI } from 'vue-bot-ui'

export default {
  components: {
    VueBotUI,
  },
  data () {
    return {
      data: [
        {
          agent: 'bot',
          type: 'button',
          text: 'How may I help you today?',
          disableInput: true,
          options: [
            {
              text: 'Explore Itineraries',
              value: '/explore-destination',
              action: 'url'
            },
            {
              text: 'Travel Encyclopedia',
              value: '/resources/travel-encyclopedia',
              action: 'url'
            },
            {
              text: 'Customer Support',
              value: '/contact-us',
              action: 'url'
            },
            {
              text: 'Frequently Asked Questions',
              value: '/resources/faq',
              action: 'url'
            },
            {
              text: 'Chat with us',
              value: 'callFunc',
              action: 'postback'
            },
          ],
        }
      ],
      botOptions: {
        botTitle: 'GBI Chat',
        colorScheme: '#2f2a52',
        textColor: '#fff',
        bubbleBtnSize: 56,
        animation: true,
        boardContentBg: '#fff',
        botAvatarSize: 32,
        botAvatarImg: this.$gbiAssets + '/sheraFace.png',
        msgBubbleBgBot: '#f0f0f0',
        msgBubbleColorBot: '#000',
        msgBubbleBgUser: '#4356e0',
        msgBubbleColorUser: '#fff',
        inputPlaceholder: 'Message',
        inputDisableBg: '#fff',
        inputDisablePlaceholder: null
      },
      botImg: this.$gbiAssets + '/sheraFace.png',
      botActive: false
    }
  },
  methods: {
    callFunc(){
      alert('hi')
    },
    toggleImg(){
      this.botActive = !this.botActive;
      if(!this.botActive){
        this.botImg = this.$gbiAssets+'/sheraFace.png'
      } else {
        this.botImg = ""
      }
    },
    messageSendHandler(value){
      this.data.push({
        agent: 'user',
        type: 'text',
        text: value.text
      })
      if(value.text == 'Hello' || value.text == 'Hi' || value.text == 'hello' || value.text == 'hi' || value.text == 'hey' || value.text == 'Hey'){
        this.data.push({
          agent: 'bot',
          type: 'button',
          text: 'How may I help you today?',
          disableInput: true,
          options: [
            {
              text: 'Explore Itineraries',
              value: '/explore-destination',
              action: 'url'
            },
            {
              text: 'Travel Encyclopedia',
              value: '/resources/travel-encyclopedia',
              action: 'url'
            },
            {
              text: 'Customer Support',
              value: '/contact-us',
              action: 'url'
            },
            {
              text: 'Frequently Asked Questions',
              value: '/resources/faq',
              action: 'url'
            },
            {
              text: 'Chat with us',
              value: 'callFunc',
              action: 'postback'
            },
          ],
        })
      }
    }
  }
}
</script>

<style scoped>
.chatFace {
  right: 0px; 
  bottom: 0px; 
  position: fixed; 
  z-index: 9999999
}
</style>