import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  fetchSpotlights,
  useFetchJobsDispatch,
} from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs", () => {
      useStoreMock.mockReturnValue({
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
      useStoreMock.mockReturnValue({
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
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Org1"]),
        },
      });

      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Org1"]));
    });
  });

  describe("fetchSpotlights", () => {
    it("retrieves spotlights", async () => {
      useStoreMock.mockReturnValue({
        getters: {
          FETCH_SPOTLIGHTS: [{ id: 1 }],
        },
      });

      const result = await fetchSpotlights();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
});
