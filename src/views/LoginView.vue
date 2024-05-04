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
      class="flex mt-6 gap-10 justify-center items-center flex-col"
    >
      <label for="email" class="relative border-amber-400">
        <input
          required
          type="email"
          id="email"
          placeholder=" "
          autoComplete="off"
          name="email"
          class="w-[220px] sm:w-full text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400 myNameInput myInput relative z-20 bg-transparent"
          v-model="email"
        />
        <span
          class="text-2xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 px-1 text-gray-400 input-text z-10"
        >
          Email
        </span>
      </label>

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
