<script setup lang="ts">
import Glass from '@/assets/glass.svg';
import CollapsibleList from '@/components/CollapsibleList.vue';
import SinglePost from '@/components/SinglePost.vue';
import PostsList from '@/components/PostsList.vue';
// import { usePostStore } from '@/stores/postStore';

// const postsStore = usePostStore();
// await postsStore.fetchPosts();
//
// console.log(postsStore.postList);
</script>

<template>
  <main class="mt-12 flex-grow" id="menu">
    <form class="relative max-w-min mx-auto md:ml-auto md:mr-0 mt-5">
      <input
        type="text"
        placeholder="szukaj tematu"
        class="w-48 md:w-64 shadow-sm rounded-full bg-gray-200 placeholder:text-gray-500 pr-14 pl-5 border-0"
      />
      <button type="button" class="absolute top-1/2 right-4 -translate-y-1/2">
        <img :src="Glass" alt="szkło powiększające" class="w-7" />
      </button>
    </form>
    <CollapsibleList />
    <div class="mt-5">
      <ul class="flex place-content-between">
        <li>
          <RouterLink
            to="/"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            Wszystkie
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="?cat=react"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            React
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=vanilla%20javascript"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            Vanilla JavaScript
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=node"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            Node
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=express"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            Express
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=typescript"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            TypeScript
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=nestjs"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            NestJS
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/?cat=other"
            class="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
          >
            Other
          </RouterLink>
        </li>
      </ul>
      <hr class="my-2 h-0.5 border-t-0 bg-blue-400 opacity-100 dark:opacity-50" />
    </div>
    <div class="font-light leading-9 text-base md:text-base md:leading-6 md:tracking-wide">
      W naszej codziennej pracy w wielu projektach używamy technologii JavaScript, szczególnie
      Express oraz React. Na naszym blogu staramy się nieskomplikowanym językiem przybliżyć Ci
      specyfikę tych technologii, a także pokazać ich zastosowanie w praktyce. Artykuły tworzymy na
      bazie wieloletniego doświadczenia naszych specjalistów, więc o rzetelność informacji nie
      musisz się martwić.
    </div>

    <suspense>
      <PostsList />
      <template #fallback> Loading ... </template>
    </suspense>
  </main>
</template>

<style scoped></style>
