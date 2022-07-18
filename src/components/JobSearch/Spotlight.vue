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

<script>
import { fetchSpotlights } from "@/store/composables";
import { ref, onMounted } from "vue";

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);

    const getSpotlights = async () => {
      spotlights.value = await (await fetchSpotlights()).value;
    };

    onMounted(getSpotlights);

    return { spotlights };
  },
};
</script>

<style></style>
