import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Some header",
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "some_mutation",
      ...props,
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    const props = { uniqueValues: new Set(["ValueA", "ValueB"]) };
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='value']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["ValueA", "ValueB"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();

      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Type1"]),
      };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Type1']");
      await findedInput.setChecked();

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Type1"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });

      const props = { uniqueValues: new Set(["ValueA", "ValueB"]) };
      const wrapper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='ValueA']");
      await findedInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});