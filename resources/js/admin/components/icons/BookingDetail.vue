<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary" title="Booking Detail"
            ><i class="fas fa-book-reader"></i
        ></span>
        </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>