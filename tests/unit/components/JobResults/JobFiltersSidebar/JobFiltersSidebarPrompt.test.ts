import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;
// import { createState } from "../../../store/utils";
// import mutations from "@/store/mutations";

// import {
//   useUniqueOrganizations,
//   useUniqueJobTypes,
//   useUniqueDegrees,
// } from "@/store/composables";
// jest.mock("@/store/composables");

// const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
// const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
// const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";

describe("JobFiltersSidebarPrompt", () => {
  describe("when user click clear filters button", () => {
    it("sends message to clear all of user's job search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });

      const wrapper = mount(JobFiltersSidebarPrompt);
      const button = wrapper.findComponent({ ref: "clear-user-job-filters" });
      await button.trigger("click");

      expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
    });
  });

  // it("allows user to filter jobs by job types", () => {
  //   useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
  //   const wrapper = shallowMount(JobFiltersSidebar);
  //   const filterComponent = wrapper.findComponent({
  //     ref: "job-types-filter",
  //   });
  //   const { header, uniqueValues, mutation } = filterComponent.props();
  //   expect(header).toBe("Job Types");
  //   expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
  //   expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  // });
  // it("allows user to filter jobs by organizations", () => {
  //   useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
  //   const wrapper = shallowMount(JobFiltersSidebar);
  //   const filterComponent = wrapper.findComponent({
  //     ref: "organizations-filter",
  //   });
  //   const { header, uniqueValues, mutation } = filterComponent.props();
  //   expect(header).toBe("Organizations");
  //   expect(uniqueValues).toEqual(new Set(["Google"]));
  //   expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  // });
  // it("allows user to filter jobs by degrees", () => {
  //   useUniqueDegreesMock.mockReturnValue(new Set(["Master's"]));
  //   const wrapper = shallowMount(JobFiltersSidebar);
  //   const filterComponent = wrapper.findComponent({
  //     ref: "degrees-filter",
  //   });
  //   const { header, uniqueValues, mutation } = filterComponent.props();
  //   expect(header).toBe("Degrees");
  //   expect(uniqueValues).toEqual(new Set(["Master's"]));
  //   expect(mutation).toBe("ADD_SELECTED_DEGREES");
  // });
  // it("allows user to clear all filter by Clear Filter button", async () => {
  //   const commit = jest.fn();
  //   useStoreMock.mockReturnValue({ commit, subscribe: jest.fn() });
  //   const selectedOrgs = ["Org1", "Org2"];
  //   const selectedJobTypes = ["Type1", "Type2"];
  //   const selectedDegress = ["Degree1", "Degree2"];
  //   useUniqueDegreesMock.mockReturnValue(selectedDegress);
  //   useUniqueOrganizationsMock.mockReturnValue(selectedOrgs);
  //   useUniqueJobTypesMock.mockReturnValue(selectedJobTypes);
  //   const startingState = createState({
  //     selectedDegrees: selectedDegress,
  //     selectedJobTypes: selectedJobTypes,
  //     selectedOrganizations: selectedOrgs,
  //   });
  //   mutations.ADD_SELECTED_ORGANIZATIONS(startingState, selectedOrgs);
  //   mutations.ADD_SELECTED_JOB_TYPES(startingState, selectedJobTypes);
  //   mutations.ADD_SELECTED_DEGREES(startingState, selectedDegress);
  //   const wrapper = shallowMount(JobFiltersSidebar);
  //   const clearFilterButton = wrapper.findComponent({
  //     ref: "clear-filter-button",
  //   });
  //   await clearFilterButton.trigger("click");
  //   expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
  //   expect(startingState.selectedOrganizations).toEqual([]);
  //   expect(startingState.selectedJobTypes).toEqual([]);
  //   expect(startingState.selectedDegrees).toEqual([]);
  // });
});
