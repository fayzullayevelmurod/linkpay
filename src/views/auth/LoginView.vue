<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onLogin = () => {
  localStorage.setItem("token", "test");
  router.push("/");
};
</script>

<template>
  <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="onLogin">Login</button>
  </div>
</template>

<style module="login">
</style>