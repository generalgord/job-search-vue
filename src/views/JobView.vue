<template>
  <div>Job Page {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;
    return { currentJobId };
  },
});
</script>

<style></style>
