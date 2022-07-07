<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
            data-test="clickable-area"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              :data-test="organization"
              @change="selectOrganization"
            />
            <label :for="organization" data-test="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

import { useUniqueOrganizations } from "@/store/composables";
import { useRouter } from "vue-router";

import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: { Accordion },
  setup() {
    const store = useStore();
    const router = useRouter();
    const uniqueOrganizations = useUniqueOrganizations();

    const selectedOrganizations = ref([]);

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({
        name: "JobResults",
      });
    };

    return { uniqueOrganizations, selectedOrganizations, selectOrganization };
  },
};
</script>
