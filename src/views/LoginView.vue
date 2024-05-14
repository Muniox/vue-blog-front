<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const userStore = useUserStore();

const { user, isLoggedIn } = storeToRefs(userStore); //reactive in the template only!, dzieki temu mamy rowniez shorthand w pisaniu

// TODO: one way binding!??
const email = defineModel('email');
const password = defineModel('password');

const handleSubmit = async () => {
  try {
    await userStore.login(email.value, password.value);
    if (isLoggedIn.value && user.value) {
      await router.push('/');
    }
  } catch (error) {
    // TODO: to tutaj powinienem dać toast?
    console.log(error);
  }
};
</script>

<template>
  <div class="mt-8 flex-grow flex flex-col items-center justify-center gap-10">
    <h1 class="text-4xl">Logowanie</h1>
    <form
      @submit.prevent="handleSubmit"
      class="flex mt-6 gap-10 justify-center items-center flex-col bg-inherit bg-white"
    >
      <div class="relative bg-inherit">
        <input
          required
          type="email"
          id="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          class="peer bg-transparent h-12 w-72 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-blue-400 focus:outline-none focus:border-blue-400 text-xl"
          v-model="email"
        />
        <label
          for="email"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Email
        </label>
      </div>

      <div class="relative bg-inherit">
        <input
          required
          type="password"
          id="password"
          placeholder=" "
          autoComplete="off"
          name="password"
          class="peer bg-transparent h-12 w-72 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-blue-400 focus:outline-none focus:border-blue-400 text-xl"
          v-model="password"
        />
        <label
          for="password"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        class="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl duration-300"
      >
        Zaloguj
      </button>

      <span class="flex flex-col gap-6 sm:flex-row sm:items-center">
        Nie masz jeszcze konta?

        <RouterLink to="/register">
          <button
            type="button"
            class="rounded-full primary-gradient text-white px-4 py-3 font-semibold text-sm duration-300 mx-auto block"
          >
            Zarejestruj się
          </button>
        </RouterLink>
      </span>
    </form>
  </div>
</template>

<style scoped></style>
