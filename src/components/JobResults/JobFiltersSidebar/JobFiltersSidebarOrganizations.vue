<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useUniqueOrganizations } from "@/store/composables";

export default defineComponent({
  name: "JobFiltersSidebarOrganizations",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return {
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>

<style></style>
