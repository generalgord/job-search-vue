import { shallowMount } from "@vue/test-utils";

import Spotlight from "@/components/JobSearch/Spotlight.vue";
import {
  useFetchSpotlightsDispatch,
  useGetSpotlights,
} from "@/store/composables";
jest.mock("@/store/composables");

const useGetSpotlightsMock = useGetSpotlights as jest.Mock;

describe("Spotlight", () => {
  const createConfig = () => ({
    global: {
      slots: {
        default:
          '<template #default="slotProps"><h1>{{slotProps.title}}</h1></template>',
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to to fetch jobs from API", () => {
      useGetSpotlightsMock.mockReturnValue({ value: [] });
      shallowMount(Spotlight, createConfig());
      expect(useFetchSpotlightsDispatch).toHaveBeenCalled();
    });
  });
});
