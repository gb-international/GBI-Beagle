<template>
    <span>
        <router-link v-if="url"
            :to="url"
            class="btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"
            @click="goBack()"><slot>Back</slot></router-link
        >
        <button v-else
            class="btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"
            type="button"
            @click="goBack()">
            <slot>Back</slot>
        </button>
    </span>
</template>
<script>
export default {
    props:['url'],
    methods:{
        goBack(){
            this.$router.back();
        }
    }
}
</script>