import { describe, expect, it, test, vi } from "vitest"
import DescribeProducts from "@/components/DescribeProducts.vue"
import { flushPromises, mount } from "@vue/test-utils"

describe("testing describe-products comp", () => {
  const wrapper = mount(DescribeProducts)
  it("component is truthy", () => {
    expect(DescribeProducts).toBeTruthy()
  })
  it("tests prop as null", () => {
    const wrapper = mount(DescribeProducts, {
      props: {
        selectedProduct: null
      }
    })
    expect(wrapper).toBeTruthy()
  })
  it("tests prop as a string", async () => {
    const wrapper = mount(DescribeProducts, {
      props: {
        selectedProduct: ""
      }
    })
    expect(wrapper).toBeTruthy()
  })
  it("tests cartProduct", async () => {
    await wrapper.setData({ showCart: true })
    flushPromises()
    console.log(wrapper.text())
  })
})