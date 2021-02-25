<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary" title="Calculate"
            ><i class="fas fa-calculator"></i
        ></span>
        </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>