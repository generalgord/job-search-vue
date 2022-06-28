import { createStore } from "vuex";

import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";

export const LOGIN_USER = "LOGIN_USER";

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

export const RECEIVE_SPOTLIGHTS = "RECEIVE_SPOTLIGHTS";
export const FETCH_SPOTLIGHTS = "FETCH_SPOTLIGHTS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
  [FETCH_SPOTLIGHTS]: async (context) => {
    const spotlightListings = await getSpotlights();
    context.commit(RECEIVE_SPOTLIGHTS, spotlightListings);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
