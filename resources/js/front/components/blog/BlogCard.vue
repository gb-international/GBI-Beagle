<template>
    <div class="card border-radius-0" @click="router.push(`/blog/${post.slug}`)">
        <div class="container pt-3">
        <img
            class="card-img-top border-radius-0"
            :src="post.image"
            alt="Bologna"
            style="height: 200px !important; width: 320;"
        />
        </div>
        <div class="card-body">
        <h4 class="card-title text-left text-primary">{{ post.title }}</h4>
        <router-link :to="`/blog/${post.slug}`">
            <h6 class="card-subtitle mb-2">{{ post.category.title }}</h6>
            <p class="card-text">{{ post.summery }}</p>
        </router-link>
        <div class="card-tags">
            <span class="text-dark card-tag mr-2" v-for="tag in post.tags" :key="tag.id">{{ tag.title }}</span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"BlogCard",
    props:['post']
}
</script>