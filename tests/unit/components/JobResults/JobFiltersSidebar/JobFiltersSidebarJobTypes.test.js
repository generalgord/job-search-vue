import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    useUniqueJobTypes.mockReturnValue(new Set(["Type1", "Type2"]));

    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());

    const clicableArea = wrapper.find("[data-test='clickable-area']");
    await clicableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='job-type']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["Type1", "Type2"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job types", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Type1", "Type2"]));
      const commit = jest.fn();

      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Type1']");
      await findedInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Type1"]);
    });

    it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Type1", "Type2"]));
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });

      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Type1']");
      await findedInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
