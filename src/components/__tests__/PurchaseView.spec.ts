import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import PurchaseView from "@/views/PurchaseView.vue"

describe("test purchase view", () => {
  const wrapper = mount(PurchaseView)
  it("test emitted events", () => {
    expect(wrapper.emitted()).toEqual({})
  })
  it("test for radio in form", () => {
    expect(
      wrapper
        .find("form")
        .findAll("input")
        .map((elem) => elem.attributes("type"))
    ).toContain("radio");
  })
  it("test wrapper component is ok", () => {
    expect(PurchaseView).toBeTruthy()
  })
  it("test snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})