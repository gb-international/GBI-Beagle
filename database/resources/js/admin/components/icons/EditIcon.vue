<template>
    <router-link :to="url" class="edit_link">
        <span class="badge badge-primary"
            ><i class="fas fa-pencil-alt"></i
        ></span>
    </router-link>
</template>
<script>
export default {
    props:['url']
}
</script>