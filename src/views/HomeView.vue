<script setup lang="ts">
import HeaderNav from '@/components/HeaderBlog.vue';
import Shape from '@/assets/shape.svg';
import PostsList from '@/components/PostsList.vue';
</script>

<template>
  <HeaderNav />
  <img
    :src="Shape"
    alt="decoration shape"
    class="absolute top-32 right-1/2 translate-x-1/2 z-10 hidden xl:inline w-[1400px]"
  />
  <PostsList />
</template>
