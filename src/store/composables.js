import { computed } from "vue";
import { useStore } from "vuex";

import {
  FETCH_SPOTLIGHTS,
  FILTERED_SPOTLIGHTS,
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from "@/store/constants";

/** GETTERS */

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const fetchSpotlights = async () => {
  const store = useStore();
  await store.dispatch(FETCH_SPOTLIGHTS);
  return computed(() => store.getters[FILTERED_SPOTLIGHTS]);
};

/** ACTIONS */

export const useFetchJobsDispatch = async () => {
  const store = useStore();
  await store.dispatch(FETCH_JOBS);
};
