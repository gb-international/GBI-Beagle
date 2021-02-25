<template>
    <router-link :to="url" class="text-uppercase font-weight-bold">
        <slot>add</slot>
    </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>