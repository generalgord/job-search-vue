<template>
  <ul>
    <li
      v-for="spotlight in displayedSpotlights"
      :key="spotlight.id"
      :spotlight="spotlight"
      data-test="spotlight-listing"
    ></li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_SPOTLIGHTS } from "@/store";

export default {
  name: "Spotlight",
  computed: {
    displayedSpotlights() {
      return this.spotlights;
    },
    ...mapState([FETCH_SPOTLIGHTS]),
  },
  mounted() {
    this.$store.dispatch(FETCH_SPOTLIGHTS);
  },
};
</script>

<style></style>
