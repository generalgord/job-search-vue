import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline.vue";

describe("Headline", () => {
  describe("Jest playground", () => {
    it("tracks whether is has been called", () => {
      jest.useFakeTimers("legacy");
      console.log(clearInterval);
      jest.useRealTimers();
      console.log(clearInterval);
    });
  });
});
