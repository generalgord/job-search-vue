import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_SPOTLIGHTS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [RECEIVE_SPOTLIGHTS](state, spotlights) {
    state.spotlights = spotlights;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, selectedOrganizations) {
    state.selectedOrganizations = selectedOrganizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, selectedJobTypes) {
    state.selectedJobTypes = selectedJobTypes;
  },
};

export default mutations;
