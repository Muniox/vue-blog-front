<script setup lang="ts">
import Delete from '@/assets/delete.png';
import defaultUserImage from '@/assets/deafult_author.svg';
import Edit from '@/assets/edit.png';
</script>

<template>
  <div class="flex-grow mt-10">
    <div class="flex gap-5 flex-col xl:flex-row">
      <img src="/default.png" alt="główny obraz" class="order-1 xl:order-2" />
      <div class="xl:order-1 order-2 flex-grow">
        <div class="flex sm:flex-row gap-3 sm:gap-5 sm:text-xl sm:items-center font-bold">
          <img :src="defaultUserImage" alt="zdjęcie autora postu" class="max-w-[60px]" />
          <div class="flex flex-col">
            <p>
              Autor:
              <span class="text-blue-400 ml-2">{post.author}</span>
            </p>
            <p>
              Opublikowano:
              <span class="text-blue-400 ml-2">{postPublishTime}</span>
            </p>
          </div>
        </div>
        <h1 class="text-xl md:text-5xl my-10 font-semibold hidden xl:block">{post.title}</h1>
        {currentUser ? currentUser.name === post.author && (
        <div class="flex gap-10 mt-10">
          <RouterLink to="/write?edit=${post.id}">
            <img :src="Edit" alt="Edit" />
            Edytuj
          </RouterLink>
          <button type="button" @click="">
            <img :src="Delete" alt="Delete" />
            Usuń
          </button>
        </div>
        ) : null}
      </div>
    </div>
    <div>
      <h1 class="text-xl md:text-5xl mt-10 font-semibold xl:hidden">post title</h1>
      <div class="post-single mt-10" />
    </div>
  </div>
</template>

<style scoped></style>
