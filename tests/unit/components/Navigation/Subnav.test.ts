import { mount } from "@vue/test-utils";

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

import Subnav from "@/components/Navigation/Subnav.vue";

const useConfirmRouteMock = useConfirmRoute as jest.Mock;
const useFilteredJobsMock = useFilteredJobs as jest.Mock;

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
      useConfirmRouteMock.mockReturnValue(true);
      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      // expect(jobCount.exists()).toBe(true);
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      useConfirmRouteMock.mockReturnValue(false);
      useFilteredJobsMock.mockReturnValue([]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
