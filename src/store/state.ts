import { GlobalState } from "./types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  };
};

export default state;
