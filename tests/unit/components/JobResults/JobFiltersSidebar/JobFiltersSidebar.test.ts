import { shallowMount } from "@vue/test-utils";

import {
  useUniqueOrganizations,
  useUniqueJobTypes,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));

    const wrapper = shallowMount(JobFiltersSidebar);
    const filterComponent = wrapper.findComponent({
      ref: "job-types-filter",
    });
    const { header, uniqueValues, mutation } = filterComponent.props();

    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allows user to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));

    const wrapper = shallowMount(JobFiltersSidebar);
    const filterComponent = wrapper.findComponent({
      ref: "organizations-filter",
    });
    const { header, uniqueValues, mutation } = filterComponent.props();

    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });

  it("allows user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(new Set(["Master's"]));

    const wrapper = shallowMount(JobFiltersSidebar);
    const filterComponent = wrapper.findComponent({
      ref: "degrees-filter",
    });
    const { header, uniqueValues, mutation } = filterComponent.props();

    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(new Set(["Master's"]));
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
