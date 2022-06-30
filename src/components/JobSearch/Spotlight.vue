<template>
  <ul>
    <li
      v-for="spotlight in displayedSpotlights"
      :key="spotlight.id"
      data-test="spotlight-listing"
    >
      <!-- <spotlight-container :spotlight="spotlight"></spotlight-container> -->
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { FETCH_SPOTLIGHTS } from "@/store/constants";

// import SpotlightContainer from "../Shared/SpotlightContainer.vue";

export default {
  name: "Spotlight",
  // components: { SpotlightContainer },
  computed: {
    displayedSpotlights() {
      return this.spotlights;
    },
    ...mapState(["spotlights"]),
  },
  async mounted() {
    this.FETCH_SPOTLIGHTS();
  },
  methods: {
    ...mapActions([FETCH_SPOTLIGHTS]),
  },
};
</script>

<style></style>
