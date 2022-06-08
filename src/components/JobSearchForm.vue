<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10"></label>
        <input
          type="text"
          :value="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
          @input="updateRole"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <input
          type="text"
          :value="location"
          placeholder="İstanbul"
          class="w-full text-lg font-normal focus:outline-none"
          @input="updateLocation"
        />
      </div>
    </div>

    <action-button text="Search" type="secondary" class="rounded-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(e) {
      this.role = e.target.value;
    },
    updateLocation(e) {
      this.location = e.target.value;
    },
  },
};
</script>

<style></style>
