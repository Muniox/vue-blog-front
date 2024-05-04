<script setup lang="ts">
import Logo from '@/assets/logo.svg';
</script>

<template>
  <nav class="relative flex place-content-between mt-5">
    <img :src="Logo" alt="Logo JS DOSE - Your Daily Dose of JS" class="w-40 md:w-[220px]" />
    <ul class="hidden md:flex gap-8 md:gap-1 text-xl font-semibold leading-10">
      <li>
        <RouterLink to="/about" class="block px-3 py-0.5 hover:text-blue-400">O nas</RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="block px-3 py-0.5 hover:text-blue-400">Blog</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" class="block px-3 py-0.5 hover:text-blue-400">Kontakt</RouterLink>
      </li>
      <li>
        <RouterLink to="/write" class="block px-3 py-0.5 hover:text-blue-400">
          Utwórz post
        </RouterLink>
      </li>
      <li class="block px-3 py-0.5 text-blue-400 underline-offset-4 underline">username</li>
      <li>
        <RouterLink to="/" class="block px-3 py-0.5 hover:text-blue-400" @click="">
          Wyloguj
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/login" class="block px-3 py-0.5 hover:text-blue-400">
          Logowanie
        </RouterLink>
      </li>
    </ul>
    <!--    <Sidebar />-->
  </nav>
</template>

<style scoped></style>
