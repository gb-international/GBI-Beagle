<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary" title="View Item"
            ><i class="fas fa-eye"></i
        ></span>
        </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>