import { mount } from "@vue/test-utils";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $store,
        $router,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Type1", "Type2"]),
      },
    };
    const $router = { push: jest.fn() };
    const wrapper = mount(
      JobFiltersSidebarJobTypes,
      createConfig($store, $router)
    );

    const clicableArea = wrapper.find("[data-test='clickable-area']");
    await clicableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='job-type']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["Type1", "Type2"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job types", async () => {
      const commit = jest.fn();
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Type1", "Type2"]),
        },
        commit,
      };
      const $router = { push: jest.fn() };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Type1']");
      await findedInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Type1"]);
    });

    it("navigate user to job results page to see fresh batch of filtered jobs", async () => {
      const $store = {
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Type1", "Type2"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(
        JobFiltersSidebarJobTypes,
        createConfig($store, $router)
      );

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Type1']");
      await findedInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
