import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = (store) => ({
    global: {
      plugins: [store],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("display company name", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Amiral Careers");
  });

  describe("displays menu items for navigation", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
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
        const store = createStore({
          state() {
            return {
              isLoggedIn: true,
            };
          },
        });
        const wrapper = shallowMount(MainNav, createConfig(store));
        let profileImage = wrapper.find("[data-test='profile-image'");
        expect(profileImage.exists()).toBe(true);
      });

      it("displays subnav with additional information", async () => {
        const store = createStore({
          state() {
            return {
              isLoggedIn: true,
            };
          },
        });
        const wrapper = shallowMount(MainNav, createConfig(store));

        const subnav = wrapper.find("[data-test='subnav']");
        expect(subnav.exists()).toBe(true);
      });
    });
  });

  describe("when user is logged out", () => {
    it("issues call to Vuex to login user", async () => {
      const store = createStore();
      const commit = jest.fn();
      store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenLastCalledWith("LOGIN_USER");
    });
  });
});
