import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PurchaseView from "@/views/PurchaseView.vue";

describe("test purchase view", () => {
  it("test emitted events", () => {
    expect(PurchaseView).toBeTruthy();
  });

  it("tests name input", async () => {
    const wrapper = mount(PurchaseView);
    const input = wrapper.find(".nameInput");
    await input.setValue("Any Name");
    //@ts-expect-error: value is a property but kind of not recognized by ts
    expect(input.element.value).toContain("Any Name");
  });

  it("triggers submit event", async () => {
    const wrapper = mount(PurchaseView);
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted()).toHaveProperty("submit");
  });

  it("tests delivery time input", async () => {
    const wrapper = mount(PurchaseView);
    const deliveryInput = wrapper.find("#deliveryTime");
    await deliveryInput.setValue("12:00");
    // @ts-expect-error: property value does exist.
    expect(deliveryInput.element.value).toBe("12:00");
  });

  it("tests MKU student radio buttons", async () => {
    const wrapper = mount(PurchaseView);

    const studentInput2 = wrapper.find("#notStudent");
    const customerName = wrapper.find("#customerName");
    const deliveryTime = wrapper.find("#deliveryTime");
    const deliveryPoint = wrapper.find("option[value=Library]");

    await studentInput2.setValue();
    await customerName.setValue("Mr Hubb Hubbs");
    await deliveryTime.setValue("09:01");
    await deliveryPoint.setValue();

    await wrapper.find("form").trigger("submit");

    const formValues2 = (
      wrapper.emitted("submit") as Record<string, any>[]
    )[0][0];
    //crazy that I can't test for the boolean false. I've to convert to string. may be an issue with vue.
    expect(formValues2).toStrictEqual({
      name: "Mr Hubb Hubbs",
      delivery: "09:01",
      student: "false",
      deliverPoint: "Library",
    });
  });
});
