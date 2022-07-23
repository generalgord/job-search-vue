import { GlobalState } from "./types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    degrees: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  };
};

export default state;
