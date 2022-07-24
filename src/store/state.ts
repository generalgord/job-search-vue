import { GlobalState } from "./types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    degrees: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    skillsSearchTerm: "",
  };
};

export default state;
