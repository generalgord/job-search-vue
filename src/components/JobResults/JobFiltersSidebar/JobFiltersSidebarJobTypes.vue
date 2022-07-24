<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import { useUniqueJobTypes } from "@/store/composables";

export default defineComponent({
  name: "JobFiltersSidebarJobTypes",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return {
      uniqueJobTypes,
      ADD_SELECTED_JOB_TYPES,
    };
  },
});
</script>

<style></style>
