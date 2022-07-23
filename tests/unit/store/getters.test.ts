import getters from "@/store/getters";

import { createDegree, createJob, createSpotlight, createState } from "./utils";

describe("getters", () => {
  describe("UNIQUE_DEGREES", () => {
    it("unique degree values", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Banchelor's" }),
        createDegree({ degree: "Master's" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(new Set(["Master's", "Banchelor's"]));
    });
  });

  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Type1" }),
        createJob({ jobType: "Type2" }),
        createJob({ jobType: "Type1" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Type1", "Type2"]));
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given organization", () => {
        const state = createState({
          selectedOrganizations: ["Google", "Microsoft"],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job type", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "Intern" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given organization", () => {
        const state = createState({
          selectedJobTypes: ["Intern", "Full Time"],
        });
        const job = createJob({ jobType: "Intern" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization and job type", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
      };

      const job = createJob({ id: 1, title: "Java Engineer" });
      const state = createState({
        jobs: [job],
      });

      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
    });
  });
  describe("FILTERED_SPOTLIGHTS", () => {
    it("filters jobs by organization and job type", () => {
      const spotlight = createSpotlight({ id: 1, title: "Some Spot" });
      const state = createState({
        spotlights: [spotlight],
      });

      const result = getters.FILTERED_SPOTLIGHTS(state);
      expect(result).toEqual([spotlight]);
    });
  });
});
