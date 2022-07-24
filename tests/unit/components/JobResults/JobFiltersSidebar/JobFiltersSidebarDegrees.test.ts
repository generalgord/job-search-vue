import { shallowMount } from "@vue/test-utils";

jest.mock("vuex");

import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(new Set(["Master's"]));

    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const filterComponent = wrapper.findComponent({
      name: "job-filters-sidebar-checkbox-group",
    });
    const { uniqueValues, mutation } = filterComponent.props();

    expect(uniqueValues).toEqual(new Set(["Master's"]));
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
