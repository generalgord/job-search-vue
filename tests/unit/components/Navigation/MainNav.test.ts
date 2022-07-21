import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";
import { GlobalState } from "@/store/types";

interface MockStore {
  state: Partial<GlobalState>;
}

describe("MainNav", () => {
  const createConfig = ($store: MockStore) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("display company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Amiral Careers");
  });

  describe("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
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

    describe("when user logged in", () => {
      it("displays user profile picture", async () => {
        const $store = {
          state: {
            isLoggedIn: true,
          },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        let profileImage = wrapper.find("[data-test='profile-image'");
        expect(profileImage.exists()).toBe(true);
      });

      it("displays subnav with additional information", async () => {
        const $store = {
          state: {
            isLoggedIn: true,
          },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));

        const subnav = wrapper.find("[data-test='subnav']");
        expect(subnav.exists()).toBe(true);
      });
    });
  });

  describe("when user is logged out", () => {
    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenLastCalledWith("LOGIN_USER");
    });
  });
});
