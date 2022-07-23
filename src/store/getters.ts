import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  FILTERED_SPOTLIGHTS,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
  UNIQUE_DEGREES,
} from "@/store/constants";

import { GlobalState } from "./types";
import { Job } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
}

export const getters = {
  [UNIQUE_DEGREES](state: GlobalState) {
    const uniqueDegrees = new Set<string>();
    state.degrees.forEach((degree) => uniqueDegrees.add(degree.degree));
    return uniqueDegrees;
  },
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job));
  },
  [FILTERED_SPOTLIGHTS](state: GlobalState) {
    return state.spotlights;
  },
};

export default getters;
