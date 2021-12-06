import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Product } from "../../Entities/Product";
import { ProductType } from "../TypeDefs/Product";
import { StatusType } from "../TypeDefs/Status";

export const CREATE_PRODUCT = {
  type: ProductType,
  args: {
    naam: { type: GraphQLString },
    afbeelding: { type: GraphQLString },
    omschrijving: { type: GraphQLString },
    prijs: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { naam, afbeelding, omschrijving, prijs } = args;
    await Product.insert({
      naam,
      afbeelding,
      omschrijving,
      prijs,
    });
    return args;
  },
};

export const UPDATE_PRODUCT = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
    naam: { type: GraphQLString },
    afbeelding: { type: GraphQLString },
    omschrijving: { type: GraphQLString },
    prijs: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, naam, afbeelding, omschrijving, prijs } = args;
    const product = await Product.findOne({
      id: id,
    });

    if (!product) {
      throw new Error("Product bestaat niet");
    }

    if (id === id) {
      await Product.update({ naam: naam }, { afbeelding: afbeelding }, {
        omschrijving: omschrijving,
      } as any);
      return { gelukt: true, berricht: "Product is succesvol veranderd" };
    } else {
      throw new Error("Product zijn onjuist");
    }
  },
};

export const DELETE_PRODUCT = {
  type: StatusType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Product.delete(id);

    return { gelukt: true, berricht: "Product is sucessvol verwijderd" };
  },
};
