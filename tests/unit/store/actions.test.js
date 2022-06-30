import actions from "@/store/actions";

import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";

jest.mock("@/api/getJobs");
jest.mock("@/api/getSpotlights");

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });

    it("makes request to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });

  describe("FETCH_SPOTLIGHTS", () => {
    beforeEach(() => {
      getSpotlights.mockResolvedValue([
        {
          id: 1,
          title: "Spotlight 1",
        },
      ]);
    });

    it("makes request to fetch spotlights", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_SPOTLIGHTS(context);
      expect(getSpotlights).toHaveBeenCalled();
    });

    it("sends message to save received spotlights in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_SPOTLIGHTS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_SPOTLIGHTS", [
        {
          id: 1,
          title: "Spotlight 1",
        },
      ]);
    });
  });
});
