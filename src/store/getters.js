import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
} from "@/store/constants";

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state, getters) {
    // # first implementation with no getters
    // let filteredJobs = state.jobs;

    // const selectedOrgs = state.selectedOrganizations.length > 0;
    // const selectedJobTypes = state.selectedJobTypes.length > 0;
    // if (selectedOrgs) {
    //   filteredJobs = filteredJobs.filter((job) =>
    //     state.selectedOrganizations.includes(job.organization)
    //   );
    // }
    // if (selectedJobTypes) {
    //   filteredJobs = filteredJobs.filter((job) =>
    //     state.selectedJobTypes.includes(job.jobType)
    //   );
    // }
    // return filteredJobs;

    // # second implementation with getters (more intelligent way)
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job));
  },
};

export default getters;
