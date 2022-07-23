import { computed } from "vue";
import { useStore } from "vuex";

import { key } from "@/store";

import {
  FETCH_SPOTLIGHTS,
  FILTERED_SPOTLIGHTS,
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_DEGREES,
  FETCH_DEGREES,
} from "@/store/constants";
import { Job, Spotlight } from "@/api/types";

/** GETTERS */

export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_DEGREES]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useGetSpotlights = () => {
  const store = useStore(key);
  return computed<Spotlight[]>(() => store.getters[FILTERED_SPOTLIGHTS]);
};

/** ACTIONS */

export const useFetchDegreesDispatch = async () => {
  const store = useStore(key);
  await store.dispatch(FETCH_DEGREES);
};

export const useFetchJobsDispatch = async () => {
  const store = useStore(key);
  await store.dispatch(FETCH_JOBS);
};

export const useFetchSpotlightsDispatch = async () => {
  const store = useStore(key);
  await store.dispatch(FETCH_SPOTLIGHTS);
};
