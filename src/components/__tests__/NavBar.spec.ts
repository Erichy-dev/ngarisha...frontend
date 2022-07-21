import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NavBar from "@/components/NavBar.vue";

describe("tests navigation bar", () => {
  it("tests component's truthy", () => {
    expect(NavBar).toBeTruthy()
  })

  it("tests router links to correct page", () => {
    // @ts-expect-error: problem is currently unsolved. Issues with volar etc.
    const wrapper = mount(NavBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(
      wrapper.findAllComponents(RouterLinkStub)[0].props().to
    ).toStrictEqual("/about");
    expect(
      wrapper.findAllComponents(RouterLinkStub)[1].props().to
    ).toStrictEqual("/");
  })
})