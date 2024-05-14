<script setup lang="ts">
import defaultUserImg from '@/assets/deafult_author.svg';
import type { Post } from '@/types/post';
import { useDate } from '@/composable/date-fns.composable';

const props = defineProps<{ post: Post }>();
const postPublishTime = useDate(props.post.createdAt);
</script>

<template>
  <div
    class="mt-20 flex flex-col max-w-[580px] items-start mx-auto xl:flex-row xl:max-w-full xl:gap-10 xl:place-content-between xl:even:flex-row-reverse"
  >
    <img src="/default.png" alt="" class="rounded-3xl xl:order-last" />
    <div class="flex-grow">
      <div class="flex gap-8 mt-4 w-full xl:mt-0">
        <p class="font-bold hidden md:inline">
          Opublikowane:
          <span class="text-blue-400 ml-2">{{ postPublishTime }}</span>
        </p>
        <p class="font-bold hidden md:inline">
          Kategoria:
          <span class="text-blue-400 ml-2">{{ post.category }}</span>
        </p>
      </div>
      <RouterLink :to="`/post/${post.id}`">
        <h2
          class="text-base font-semibold md:font-light mt-2 leading-5 md:leading-8 md:text-3xl hover:text-blue-400"
        >
          {{ post.title }}
        </h2>
      </RouterLink>
      <div class="flex items-center gap-6 mt-3">
        <img :src="defaultUserImg" alt="zdjęcie autora postu" />
        <p class="font-bold">
          Autor:
          <span class="text-blue-400 ml-2">{{ post.user.username }}</span>
        </p>
      </div>

      <p
        class="mt-3 font-light leading-5 md:leading-8 text-sm post-text md:text-xl"
        v-html="post.description"
      />
      <RouterLink :to="`/post/${post.id}`">
        <button
          type="button"
          class="rounded-full px-5 py-2 mt-3 text-blue-400 border-blue-400 border text-base md:text-xl hover:bg-blue-400 hover:text-white transition duration-300"
        >
          Czytaj więcej
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style></style>
