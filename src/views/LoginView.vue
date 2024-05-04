<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
// TODO: one way binding!
const email = defineModel('email');
const password = defineModel('password');

const handleSubmit = async () => {
  await userStore.login(email.value, password.value);
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
          class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          v-model="email"
        />
        <label
          for="email"
          class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          Email
        </label>
      </div>

      <label for="password" class="relative border-amber-400">
        <input
          required
          type="password"
          id="password"
          placeholder=" "
          autoComplete="off"
          name="password"
          class="w-[220px] sm:w-full text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400 myPasswordInput myInput relative z-20 bg-transparent"
          v-model="password"
        />
        <span
          class="text-2xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 px-1 text-gray-400 input-text z-10"
        >
          Hasło
        </span>
      </label>
      <button
        type="submit"
        class="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl duration-300"
      >
        Zaloguj
      </button>
      <p class="text-red-600">{err}</p>
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
