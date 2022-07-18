import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  fetchSpotlights,
} from "@/store/composables";

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs", () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("receives unique job types from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Type1"]),
        },
      });

      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Type1"]));
    });
  });

  describe("useUniqueOrganizations", () => {
    it("receives unique job types from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Org1"]),
        },
      });

      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Org1"]));
    });
  });

  describe("fetchSpotlights", () => {
    it("retrieves spotlights", () => {
      useStore.mockReturnValue({
        getters: {
          FETCH_SPOTLIGHTS: [{ id: 1 }],
        },
      });

      const result = fetchSpotlights();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });
});
