<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { ADD_SELECTED_DEGREES } from "@/store/constants";
import { useUniqueDegrees } from "@/store/composables";

export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>

<style></style>
