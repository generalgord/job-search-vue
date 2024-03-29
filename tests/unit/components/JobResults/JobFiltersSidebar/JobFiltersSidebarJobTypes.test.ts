import { shallowMount } from "@vue/test-utils";

jest.mock("vuex");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));

    const wrapper = shallowMount(JobFiltersSidebarJobTypes);
    const filterComponent = wrapper.findComponent({
      name: "job-filters-sidebar-checkbox-group",
    });
    const { uniqueValues, mutation } = filterComponent.props();

    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
