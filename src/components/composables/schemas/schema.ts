type ProductSchema = {
  fields: {
    name: string;
    slug: string;
    price: string;
    get_image_str: string;
  };
};
type ProfileSchema = {
  name: string;
  get_image_str: string;
};
type DisplayProductSchema = {
  key: number;
  name: string;
  slug: string;
  class: string;
  price: string;
}[];

export type { ProductSchema, ProfileSchema, DisplayProductSchema };
