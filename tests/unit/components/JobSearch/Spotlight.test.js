import { flushPromises, shallowMount } from "@vue/test-utils";

import Spotlight from "@/components/JobSearch/Spotlight";

describe("Spotlight", () => {
  const createStore = (config = {}) => ({
    state: {
      spotlights: Array(5).fill({}),
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      slots: {
        default:
          '<template #default="slotProps"><h1>{{slotProps.title}}</h1></template>',
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to to fetch jobs from API", () => {
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(Spotlight, createConfig($store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_SPOTLIGHTS");
    });
  });

  // it("provides img attr to parent component", async () => {
  //   const $n_store = {
  //     state: {
  //       spotlights: [{ img: "some image", title: "some title" }],
  //     },
  //     dispatch: jest.fn(),
  //   };

  //   const $store = createStore($n_store);

  //   const wrapper = shallowMount(Spotlight, createConfig($store));
  //   await flushPromises();
  //   console.log(wrapper.text());
  //   expect(wrapper.text()).toMatch("Some title");
  // });
});
