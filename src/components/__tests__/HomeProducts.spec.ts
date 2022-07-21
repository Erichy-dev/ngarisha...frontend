import HomeProducts from "@/components/HomeProducts.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("testing home-products", () => {
  it("component truthy", () => {
    expect(HomeProducts).toBeTruthy();
  });

  it("tests select button works ok", async () => {
    const wrapper = mount(HomeProducts, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("addCart")).toHaveLength(2);
    expect((wrapper.emitted("addCart") as string[])[0][0]).toBeTypeOf("string");
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/reviews");
  });

  it("tests clicking icons emit events", async () => {
    const wrapper = mount(HomeProducts, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    await wrapper.findAll("svg")[0].trigger("click")
    await wrapper.findAll("svg")[1].trigger("click")

    expect(wrapper.emitted("click")).toBeTruthy()
    expect(wrapper.emitted("click")).toHaveLength(2)
  });

  it("tests the products move when clicked: right click", async () => {
    const wrapper = mount(HomeProducts, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const product = wrapper.find("img")
    const clickRight = wrapper.find(".moveRight")
    const product2 = wrapper.find("img")

    // before click
    expect(product.attributes().src === product2.attributes().src).toBeTruthy()
    // after click
    await clickRight.trigger("click")
    const product3 = wrapper.find("img")
    expect(product.attributes().src === product3.attributes().src).toBeFalsy()
  })

  it("tests the products move when clicked: left click", async () => {
    const wrapper = mount(HomeProducts, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const product = wrapper.find("img")
    const clickLeft = wrapper.find(".moveLeft")
    const product2 = wrapper.find("img")

    // before click
    expect(product.attributes().src === product2.attributes().src).toBeTruthy()
    // after click
    await clickLeft.trigger("click")
    const product3 = wrapper.find("img")
    expect(product.attributes().src === product3.attributes().src).toBeFalsy()
  })
});
