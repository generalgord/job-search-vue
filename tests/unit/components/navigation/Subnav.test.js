import { mount } from "@vue/test-utils";

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

import Subnav from "@/components/Navigation/Subnav.vue";

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRoute.mockReturnValue(true);
      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      // expect(jobCount.exists()).toBe(true);
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      useConfirmRoute.mockReturnValue(false);
      useFilteredJobs.mockReturnValue([]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
