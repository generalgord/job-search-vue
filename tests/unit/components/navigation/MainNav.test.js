import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("display company name", () => {
    const wrapper = shallowMount(MainNav, createConfig);
    expect(wrapper.text()).toMatch("Amiral Careers");
  });

  describe("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig);
    // const navMenuItems = wrapper.findAll("li");
    const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navMenuTexts = navMenuItems.map((item) => item.text());
    expect(navMenuTexts).toEqual([
      "Teams",
      "Locations",
      "How we hire",
      "Students",
      "Jobs",
    ]);

    // describe("when user is logged out", () => {
    //   it("prompts user to sign in", () => {
    //     const wrapper = shallowMount(MainNav);
    //     const loginButton = wrapper.find("[data-test='login-button'");
    //     expect(loginButton.exists()).toBe(true);
    //   });
    // });

    describe("when user logs in", () => {
      it("displays user profile picture", async () => {
        const wrapper = shallowMount(MainNav, createConfig);
        let profileImage = wrapper.find("[data-test='profile-image'");
        expect(profileImage.exists()).toBe(false);

        let loginButton = wrapper.find("[data-test='login-button'");
        await loginButton.trigger("click");

        profileImage = wrapper.find("[data-test='profile-image'");
        loginButton = wrapper.find("[data-test='login-button'");

        expect(loginButton.exists()).toBe(false);
        expect(profileImage.exists()).toBe(true);
      });

      it("displays subnav with additional information", async () => {
        const wrapper = shallowMount(MainNav);
        let subnav = wrapper.find("[data-test='subnav']");
        expect(subnav.exists()).toBe(false);

        const loginButton = wrapper.find("[data-test='login-button'");
        await loginButton.trigger("click");

        subnav = wrapper.find("[data-test='subnav']");
        expect(subnav.exists()).toBe(true);
      });
    });
  });
});
