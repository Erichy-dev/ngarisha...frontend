import type { Ref } from "vue";

type productSchema = {
  name: string;
  price: string;
  product: string;
}[];

/**
 * moves the active product to the user's right
 * @param { Ref<number> } num1 - index of the first element
 * @param { Ref<number> } numberOfProducts - the total number of the products' image
 * @param { Ref<{}> } products - the products being sold
 * @param { Ref<string> } activeProduct - the product image that will be visible.
 * @param { Ref<string> } class1 - class to make image blur
 * @param { Ref<string> } class2 - class to make image visible
 * @param { Ref<productSchema> } serverProducts - provides src link of the images
 */
export function moveRight(
  num1: Ref<number>,
  numberOfProducts: Ref<number>,
  products: Ref<{ key: number; name: string; class: string }[]>,
  activeProduct: Ref<string>,
  class1: Ref<string>,
  class2: Ref<string>,
  serverProducts: Ref<productSchema>,
  price: Ref<string>
) {
  if (num1.value <= numberOfProducts.value - 1) {
    num1.value -= 1;
    products.value[0].class = class1.value;
    products.value[1].class = class2.value;
    activeProduct.value = products.value[2].name;
    price.value = serverProducts.value[num1.value + 1].price;
    if (num1.value > 0) {
      const firstElement = num1.value;
      for (let i = 0; i < 3; i++) {
        const element = products.value[i];
        if (firstElement === numberOfProducts.value - 2) {
          products.value[1].class = class1.value;
          products.value[2].class = class2.value;
          activeProduct.value = products.value[2].name;
          price.value = serverProducts.value[firstElement + 1].price;
          break;
        }
        element.key = firstElement + i;
        element.name = serverProducts.value[firstElement + i].product;
      }
      num1.value += 2;
    }
  }
}

/**
 * moves the active product to the user's left
 * @param { Ref<number> } num1 - index of the first element
 * @param { Ref<{}> } products - the products being sold
 * @param { Ref<string> } class1 - class to make image blur
 * @param { Ref<string> } class2 - class to make image visible
 * @param { Ref<string> } activeProduct - the product image that will be visible.
 * @param { Ref<productSchema> } serverProducts - provides src link of the images
 */
export function moveLeft(
  num1: Ref<number>,
  products: Ref<{ key: number; name: string; class: string }[]>,
  class1: Ref<string>,
  class2: Ref<string>,
  activeProduct: Ref<string>,
  serverProducts: Ref<productSchema>,
  price: Ref<string>
) {
  if (num1.value - 3 >= 0) {
    num1.value -= 3;
    products.value[2].class = class1.value;
    products.value[1].class = class2.value;
    activeProduct.value = products.value[0].name;
    price.value = serverProducts.value[num1.value].price;
    const firstElement = num1.value;
    for (let i = 0; i < 3; i++) {
      const element = products.value[i];
      if (firstElement === 0) {
        products.value[0].class = class2.value;
        products.value[1].class = class1.value;
        activeProduct.value = products.value[0].name;
        price.value = serverProducts.value[firstElement].price;
        break;
      }
      element.key = firstElement + i;
      element.name = serverProducts.value[firstElement + i].product;
    }
    num1.value += 2;
  }
}
