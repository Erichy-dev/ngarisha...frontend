import { flushPromises, mount } from "@vue/test-utils"
import { describe, expect, it, vi } from "vitest"
import BodyFooter from "../BodyFooter.vue"

describe("test footer", () => {
  it("truthy", async () => {
    expect(BodyFooter).toBeTruthy()

    const wrapper = mount(BodyFooter)
  })
})