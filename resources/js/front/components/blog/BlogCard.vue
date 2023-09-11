<template>
    <div class="card border-radius-0" @click="redirBlog()">
        <div class="container pt-3">
        <img
            class="card-img-top border-radius-0"
            :src="post.image"
            alt="Bologna"
            style="height: 200px !important; width: 320;"
        />
        </div>
        <div>
            <div class="card-body">
            <router-link :to="`/blog/${post.slug}`">
            <h4 class="card-title text-left text-primary">{{ post.title }}</h4>
            </router-link>
            <h6 class="card-subtitle mb-2">{{ post.category.title }}</h6>
            <p class="card-text">{{post.summery | sortlength(240,"") | CapitalizeString }}{{post.summery.length > 240? '...' : ''}}</p>
            <!-- <div class="card-tags">
                <span class="text-dark card-tag mr-2" v-for="tag in post.tags" :key="tag.id">{{ tag.title }}</span>
            </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"BlogCard",
    props:['post'],
    data() {
        return {
            //fullLen: 0,
        }
    },
    methods: {
        redirBlog(){
            this.$router.push(`/blog/${this.post.slug}`)
        }
    }
}
</script>

<style scoped>
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
    height: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card-body::-webkit-scrollbar {
    display: none;
}
.card{
    cursor: pointer;
}
</style>