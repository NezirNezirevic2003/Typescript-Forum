import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    naam: { type: GraphQLString },
    afbeelding: { type: GraphQLString },
    omschrijving: { type: GraphQLString },
    prijs: { type: GraphQLString },
  }),
});
