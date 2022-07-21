import ConfirmSelectionViewVue from "@/views/ConfirmSelectionView.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createRouterMock, getRouter, injectRouterMock } from "vue-router-mock";

describe("tests confirm-selection view", () => {
  const router = createRouterMock({
    spy: {
      create: (fn) => vi.fn(fn),
      reset: (spy) => spy.mockReset(),
    },
  });
  beforeEach(() => {
    injectRouterMock(router);
  });
  it("tests wrapper is truthy", () => {
    // @ts-expect-error: problem is currently unsolved. Issues with volar etc.
    const wrapper = mount(ConfirmSelectionViewVue);
    expect(wrapper).toBeTruthy();
  });

  it("tests router works fine", async () => {
    // @ts-expect-error: problem is currently unsolved. Issues with volar etc.
    const wrapper = mount(ConfirmSelectionViewVue);
    expect(wrapper.vm.$router).toBe(router);

    const deliveryButton = wrapper.find(".deliveryPush");
    await deliveryButton.trigger("click");
    expect(router.push).toHaveBeenCalledTimes(1);
  });

  it("tests visibility of undo button when there are no selected", async () => {
    await router.push("/confirmselection")
    // @ts-expect-error: problem is currently unsolved. Issues with volar etc.
    const wrapper = mount(ConfirmSelectionViewVue);
    expect(wrapper.find(".undoButton").exists()).toBeFalsy();
  });

  it("asserts undo button works and is visible when query's provided", async () => {
    await router.push("/confirmselection")
    await getRouter().setQuery({ selected: ["/1.png", "/2.png"] });
    // @ts-expect-error: problem is currently unsolved. Issues with volar etc.
    const wrapper = mount(ConfirmSelectionViewVue);
    const undoButton = wrapper.find(".undoButton")

    expect(undoButton.exists()).toBeTruthy();

    await undoButton.trigger("click")
    expect(wrapper.findAll(".undoButton").length).toStrictEqual(1)

    await undoButton.trigger("click")
    expect(wrapper.findAll(".undoButton").length).toStrictEqual(0)
  });
});
