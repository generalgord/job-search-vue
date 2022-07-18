import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

describe("useCurrentPage", () => {
  describe("when query params include page", () => {
    it("returns page", () => {
      useRoute.mockReturnValue({ query: { page: "3" } });
      const result = useCurrentPage();
      expect(result.value).toBe(3);
    });
  });
  describe("when query params exlude page", () => {
    it("defaults to page 1", () => {
      useRoute.mockReturnValue({ query: {} });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
