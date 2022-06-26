import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Başlık</h2>",
      },
    });

    expect(wrapper.text()).toMatch("Başlık");
  });

  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Alt Başlık</h2>",
      },
    });

    expect(wrapper.text()).toMatch("Alt Başlık");
  });
});
