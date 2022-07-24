<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        ref="clear-user-job-filters"
        text="Clear Filters"
        type="secondary"
        @click="clearUserJobFilterSelections"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

import { useStore } from "vuex";
import { key } from "@/store";

import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);

    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    return {
      clearUserJobFilterSelections,
    };
  },
});
</script>

<style></style>
