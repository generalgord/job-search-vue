import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with user's search parameters", () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      locationInput.setValue("Ankara");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Ankara",
        },
      });
    });
  });
});
