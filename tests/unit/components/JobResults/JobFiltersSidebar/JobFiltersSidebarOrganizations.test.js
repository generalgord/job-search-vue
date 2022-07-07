import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of organizations for filtering jobs", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));

    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());

    const clicableArea = wrapper.find("[data-test='clickable-area']");
    await clicableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='organization']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["Google", "Amazon"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for organizations", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      const commit = jest.fn();

      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Google']");
      await findedInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });

    it("navigate user to job results page to see fresh batch of filtered organizations", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));

      const push = jest.fn();
      useStore.mockReturnValue({ commit: jest.fn() });
      useRouter.mockReturnValue({ push });

      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Google']");
      await findedInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
