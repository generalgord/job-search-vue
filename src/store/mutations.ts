import { Degree, Job, Spotlight } from "@/api/types";
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_SPOTLIGHTS,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  RECEIVE_DEGREES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constants";
import { GlobalState } from "./types";

export const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [RECEIVE_SPOTLIGHTS](state: GlobalState, spotlights: Spotlight[]) {
    state.spotlights = spotlights;
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, selectedDegrees: string[]) {
    state.selectedDegrees = selectedDegrees;
  },
  [ADD_SELECTED_ORGANIZATIONS](
    state: GlobalState,
    selectedOrganizations: string[]
  ) {
    state.selectedOrganizations = selectedOrganizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, selectedJobTypes: string[]) {
    state.selectedJobTypes = selectedJobTypes;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
  },
  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, term: string) {
    state.skillsSearchTerm = term;
  },
};

export default mutations;
