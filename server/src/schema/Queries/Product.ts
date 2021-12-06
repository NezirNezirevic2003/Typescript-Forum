import { GraphQLList } from "graphql";
import { Gebruiker } from "../../Entities/Gebruiker";
import { Product } from "../../Entities/Product";
import { ProductType } from "../TypeDefs/Product";

export const GET_ALL_PRODUCTS = {
  type: new GraphQLList(ProductType),
  resolve() {
    return Product.find();
  },
};
