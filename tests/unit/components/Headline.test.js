import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline.vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action veb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes internal when component disappear", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
