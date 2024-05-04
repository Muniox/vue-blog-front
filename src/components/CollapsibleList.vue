<script setup lang="ts">
import chevronDoubleDown from '@/assets/chevron-double-down.svg';
</script>

<template>
  <div class="mt-5 border-blue-400 border md:hidden">
    <button
      type="button"
      class="block w-full text-left text-blue-400 text-xl font-light leading-10 relative px-4 py-1 border-b"
      @Click=""
    >
      Kategorie
      <img :src="chevronDoubleDown" alt="" class="w-6 absolute top-1/2 right-3 -translate-y-1/2" />
    </button>
    {isOpen && (
    <ul class="leading-6 transition duration-200">
      <li>
        <RouterLink to="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=react"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
          setIsOpen(false)} > React
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=vanilla%20javascript"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=node"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=express"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=typescript"
          class="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=nestjs"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/?cat=other"
          className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
        >
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
