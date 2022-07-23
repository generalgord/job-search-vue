<template>
  <ul>
    <li
      v-for="spotlight in spotlights"
      :key="spotlight.id"
      data-test="spotlight-listing"
    >
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  useFetchSpotlightsDispatch,
  useGetSpotlights,
} from "@/store/composables";
import { onMounted, defineComponent } from "vue";

export default defineComponent({
  name: "Spotlight",
  setup() {
    onMounted(useFetchSpotlightsDispatch);

    const spotlights = useGetSpotlights();

    return { spotlights };
  },
});
</script>

<style></style>
