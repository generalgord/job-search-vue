import { shallowMount } from "@vue/test-utils";

jest.mock("vuex");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  it("allows user to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));

    const wrapper = shallowMount(JobFiltersSidebarOrganizations);
    const filterComponent = wrapper.findComponent({
      name: "job-filters-sidebar-checkbox-group",
    });
    const { uniqueValues, mutation } = filterComponent.props();

    expect(uniqueValues).toEqual(new Set(["Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
