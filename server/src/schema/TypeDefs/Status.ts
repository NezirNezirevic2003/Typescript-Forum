import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from "graphql";

export const StatusType = new GraphQLObjectType({
  name: "Status",
  fields: () => ({
    gelukt: { type: GraphQLBoolean },
    berricht: { type: GraphQLString },
  }),
});
