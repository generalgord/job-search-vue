import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");

const useRouterMock = useRouter as jest.Mock;

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "some_mutation",
      ...props,
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    useStoreMock.mockReturnValue({ subscribe: jest.fn() });

    const props = { uniqueValues: new Set(["ValueA", "ValueB"]) };
    const wrapper = shallowMount(
      JobFiltersSidebarCheckboxGroup,
      createConfig(props)
    );

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='value']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["ValueA", "ValueB"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();

      useStoreMock.mockReturnValue({ commit, subscribe: jest.fn() });
      useRouterMock.mockReturnValue({ push: jest.fn() });

      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Type1"]),
      };
      const wrapper = shallowMount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const findedInput = wrapper.find<HTMLInputElement>("[data-test='Type1']");
      await findedInput.setValue(true);

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Type1"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });

      const props = { uniqueValues: new Set(["ValueA", "ValueB"]) };
      const wrapper = shallowMount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='ValueA']");
      await findedInput.setValue(true);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
