import type { Ref } from "vue";
export function moveRight(
  num1: Ref<number>,
  numberOfProducts: Ref<number>,
  products: Ref<{ key: number; name: string; class: string }[]>,
  activeProduct: Ref<string>,
  class1: Ref<string>,
  class2: Ref<string>
) {
  if (num1.value <= numberOfProducts.value + 2) {
    num1.value -= 1;
    products.value[0].class = class1.value;
    products.value[1].class = class2.value;
    activeProduct.value = products.value[2].name;
    if (num1.value > 0) {
      const firstElement = num1.value;
      for (let i = 0; i < 3; i++) {
        const element = products.value[i];
        if (firstElement === numberOfProducts.value + 1) {
          products.value[1].class = class1.value;
          products.value[2].class = class2.value;
          activeProduct.value = products.value[2].name;
          break;
        }
        element.key = firstElement + i;
        element.name = `/${firstElement + i}.png`;
      }
      num1.value += 2;
    }
  }
}
export function moveLeft(
  num1: Ref<number>,
  products: Ref<{ key: number; name: string; class: string }[]>,
  class1: Ref<string>,
  class2: Ref<string>,
  activeProduct: Ref<string>
) {
  if (num1.value - 3 >= 0) {
    num1.value -= 3;
    products.value[2].class = class1.value;
    products.value[1].class = class2.value;
    activeProduct.value = products.value[0].name;
    const firstElement = num1.value;
    for (let i = 0; i < 3; i++) {
      const element = products.value[i];
      if (firstElement === 0) {
        products.value[0].class = class2.value;
        products.value[1].class = class1.value;
        activeProduct.value = products.value[0].name;
        break;
      }
      element.key = firstElement + i;
      element.name = `/${firstElement + i}.png`;
    }
    num1.value += 2;
  }
}