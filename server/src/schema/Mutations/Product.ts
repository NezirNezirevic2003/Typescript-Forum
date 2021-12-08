import {
  GraphQLArgs,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  graphqlSync,
} from "graphql";
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
    oudeNaam: { type: GraphQLString },
    nieuweNaam: { type: GraphQLString },
    oudeAfbeelding: { type: GraphQLString },
    nieuweAfbeelding: { type: GraphQLString },
    oudeOmschrijving: { type: GraphQLString },
    nieuweOmschrijving: { type: GraphQLString },
    oudePrijs: { type: GraphQLInt },
    nieuwePrijs: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const {
      id,
      oudeNaam,
      nieuweNaam,
      oudeAfbeelding,
      nieuweAfbeelding,
      oudeOmschrijving,
      nieuweOmschrijving,
    } = args;
    const product = await Product.findOne({
      id: id,
    });

    if (!product) {
      throw new Error("Product bestaat niet");
    }

    const productId = product?.id;
    const productNaam = product?.naam;
    const productAfbeelding = product?.afbeelding;
    const productOmschrijving = product?.omschrijving;

    if (
      id === productId &&
      oudeNaam === productNaam &&
      oudeAfbeelding === productAfbeelding &&
      oudeOmschrijving === productOmschrijving
    ) {
      await Product.update(
        { naam: nieuweNaam },
        { afbeelding: nieuweAfbeelding },
        { omschrijving: nieuweOmschrijving } as any
      );
      return { gelukt: true, berricht: "Product is succesvol veranderd" };
    } else {
      throw new Error("Wachtwoorden zijn onjuist");
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
