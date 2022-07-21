import { afterEach, describe, expect, it, vi } from "vitest"
import DescribeProducts from "@/components/DescribeProducts.vue"
import { mount, RouterLinkStub } from "@vue/test-utils"

describe("testing describe-products comp", () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it("component is truthy", () => {
    expect(DescribeProducts).toBeTruthy()
  })

  const wrapper = mount(DescribeProducts, {
    props: {
      selectedProduct: null,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub
      }
    }
  });

  it("tests v-if of the cart as initially falsy", async () => {
    expect(wrapper.find("#cart").exists()).toBeFalsy()
  })

  it("tests selected product renders the cart visibility as truthy", async () => {
    await wrapper.setProps({ selectedProduct: "/1.png" });

    expect(wrapper.find("#cart").exists()).toBeTruthy();
    expect(wrapper.get("#cart").text()).toContain("SELECTED 1")
  })

  it("tests new selected product causes increase in numberOfProducts", async () => {
    await wrapper.setProps({ selectedProduct: "/2.png" });
    expect(wrapper.get("#cart").text()).toContain("SELECTED 2")
  })

  it("tests for duplicate product is stored", async () => {
    await wrapper.setProps({ selectedProduct: "/2.png" });
    expect(wrapper.get("#cart").text()).toContain("SELECTED 2")
  })
})