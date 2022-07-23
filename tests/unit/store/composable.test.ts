import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchSpotlightsDispatch,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
  useGetSpotlights,
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

  describe("useGetSpotlights", () => {
    it("retrieves spotlights", async () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_SPOTLIGHTS: [{ id: 1 }],
        },
      });
      const result = useGetSpotlights();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useFetchSpotlightsDispatch", () => {
    it("sends call to fetch spotlights from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchSpotlightsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_SPOTLIGHTS");
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
  describe("useFetchDegreesDispatch", () => {
    it("sends call to fetch degrees from API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchDegreesDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_DEGREES");
    });
  });
});
