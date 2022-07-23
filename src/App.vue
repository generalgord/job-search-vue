<template>
  <nav>
    <MainNav />
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "@/components/Navigation/MainNav.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
  },
});
</script>

<style>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
