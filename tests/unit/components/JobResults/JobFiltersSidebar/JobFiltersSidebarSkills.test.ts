import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;

import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

describe("JobFiltersSidebarSkills", () => {
  it("populates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit: jest.fn(),
    });

    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const input = wrapper.find('[data-test="skills-search-input"]');
    const inputElement = input.element as HTMLInputElement;
    expect(inputElement.value).toEqual("Programmer");
  });
  it("tells store that the user entered skills search term", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit,
    });

    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const input = wrapper.find('[data-test="skills-search-input"]');
    await input.setValue("Angular Developer");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_SKILLS_SEARCH_TERM",
      "Angular Developer"
    );
  });
  it("removes whitespaces from user input", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit,
    });

    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const input = wrapper.find('[data-test="skills-search-input"]');
    await input.setValue("    Angular Developer    ");
    expect(commit).toHaveBeenCalledWith(
      "UPDATE_SKILLS_SEARCH_TERM",
      "Angular Developer"
    );
  });
});
