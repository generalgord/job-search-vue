import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["job 1", "job 2"]);
      expect(state).toEqual({ jobs: ["job 1", "job 2"] });
    });
  });

  describe("RECEIVE_SPOTLIGHTS", () => {
    it("receives spotlights from API response", () => {
      const state = { spotlights: [] };
      mutations.RECEIVE_SPOTLIGHTS(state, ["spotlight 1", "spotlight 2"]);
      expect(state).toEqual({ spotlights: ["spotlight 1", "spotlight 2"] });
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter jobs by", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] });
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chosen to filter jobs by", () => {
      const state = { selectedJobTypes: [] };
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Intern", "Part-time"]);
      expect(state).toEqual({ selectedJobTypes: ["Intern", "Part-time"] });
    });
  });
});
