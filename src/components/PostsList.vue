<script setup lang="ts">
import SinglePost from '@/components/SinglePost.vue';
import { usePostStore } from '@/stores/postStore';

const postsStore = usePostStore();
await postsStore.fetchPosts();
const posts = postsStore.postList;

console.log(postsStore.postList);
</script>

<template>
  <div class="text-2xl text-center mt-10 font-light" v-if="postsStore.postList.length === 0">
    Brak postów
  </div>
  <template v-else v-for="post in posts" :key="post.id">
    <SinglePost :post />
  </template>
</template>

<style scoped></style>
