<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="container mx-auto fix-min-h-screen max-w-screen-xl p-2.5 flex flex-col md:p-5">
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
