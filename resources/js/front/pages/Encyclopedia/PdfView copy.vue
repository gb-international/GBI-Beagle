<template>
    <div class="container">
        <img class="img w-20 mr-2 link mb-2" :src="$gbiAssets+'/images/icons/back.png'" @click="$router.go(-1)"/>
        <div v-if="pdf">
            <iframe id="fraDisabled"  :src="`${pdf.name}#toolbar=0&navpanes=0`" class="w-100 h-400" />
        </div>
    </div>
</template>
<script>
export default{
    name:"PdfView",
    data(){
        return{
            pdf:'',
        }
    },
    mounted(){
        this.getPdf();
    },
    methods:{
        getPdf(){
            let api = "/api/pdf/"+this.$route.params.slug;
            this.$axios.get(api).then(res => {
                this.pdf = res.data;
            });
        },
 
    }
}

</script>