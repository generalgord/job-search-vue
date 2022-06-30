import { mount } from "@vue/test-utils";

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
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

  it("renders unique list of organizations for filtering jobs", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig($store));

    const clicableArea = wrapper.find("[data-test='clickable-area']");
    await clicableArea.trigger("click");

    const labels = wrapper.findAll("[data-test='organization']");
    const labelTexts = labels.map((node) => node.text());

    expect(labelTexts).toEqual(["Google", "Amazon"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for organizations", async () => {
      const commit = jest.fn();
      const $store = {
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
        },
        commit,
      };
      const $router = { push: jest.fn() };
      const wrapper = mount(
        JobFiltersSidebarOrganizations,
        createConfig($store, $router)
      );

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Google']");
      await findedInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]);
    });

    it("navigate user to job results page to see fresh batch of filtered organizations", async () => {
      const $store = {
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
        },
        commit: jest.fn(),
      };
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(
        JobFiltersSidebarOrganizations,
        createConfig($store, $router)
      );

      const clicableArea = wrapper.find("[data-test='clickable-area']");
      await clicableArea.trigger("click");

      const findedInput = wrapper.find("[data-test='Google']");
      await findedInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
