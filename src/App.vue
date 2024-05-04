<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterBlog from '@/components/FooterBlog.vue';
import NavbarBlog from '@/components/NavbarBlog.vue';
</script>

<template>
  <div class="container mx-auto fix-min-h-screen max-w-screen-xl p-2.5 flex flex-col md:p-5">
    <NavbarBlog />
    <RouterView />
    <FooterBlog />
  </div>
</template>

<style scoped></style>
