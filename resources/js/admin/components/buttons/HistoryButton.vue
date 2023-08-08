<template>
    <router-link :to="url" class="text-capitalize font-weight-bold">
        <slot>history</slot>
    </router-link>
</template>
<script>
export default {
    name:"HistoryButtonGBI",
    props:['url'],
}
</script>