<template>
  <ul>
    <li
      v-for="spotlight in spotlights"
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
import { fetchSpotlights } from "@/store/composables";
import { ref, onMounted } from "vue";
// import { mapState, mapActions } from "vuex";
// import { FETCH_SPOTLIGHTS } from "@/store/constants";

// import SpotlightContainer from "../Shared/SpotlightContainer.vue";

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);

    const getSpotlights = async () => {
      spotlights.value = await (await fetchSpotlights()).value;
      // const spotList = await fetchSpotlights();
      // spotlights.value = spotList.value;
    };

    onMounted(getSpotlights);

    return { spotlights };
  },
  // computed: {
  //   displayedSpotlights() {
  //     return this.spotlights;
  //   },
  //   ...mapState(["spotlights"]),
  // },
  // async mounted() {
  //   this.FETCH_SPOTLIGHTS();
  // },
  // methods: {
  //   ...mapActions([FETCH_SPOTLIGHTS]),
  // },
};
</script>

<style></style>
