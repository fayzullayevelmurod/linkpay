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
    <button @click="onLogin">Login</button>
  </div>
</template>

<style module="login">
</style>