<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary" title="View Itinerary"
            ><i class="fas fa-user-plus"></i
        ></span>
        </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>