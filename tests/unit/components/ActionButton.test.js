import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Clickable");
  });

  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
      },
    });
    const button = wrapper.find("button");

    expect(button.classes("primary")).toBe(true);
  });
});
