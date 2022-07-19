import mutations from "@/store/mutations";

import { createJob, createSpotlight, createState } from "./utils";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      const startingState = createState(state);
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();
      const state = [jobOne, jobTwo];
      mutations.RECEIVE_JOBS(startingState, state);
      expect(startingState.jobs).toEqual(state);
    });
  });

  describe("RECEIVE_SPOTLIGHTS", () => {
    it("receives spotlights from API response", () => {
      const startingState = createState({ spotlights: [] });
      const spotOne = createSpotlight();
      const spotTwo = createSpotlight();
      const state = [spotOne, spotTwo];
      mutations.RECEIVE_SPOTLIGHTS(startingState, state);
      expect(startingState.spotlights).toEqual(state);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Org1", "Org2"]);
      expect(startingState.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, ["Intern", "Part-time"]);
      expect(startingState.selectedJobTypes).toEqual(["Intern", "Part-time"]);
    });
  });
});
