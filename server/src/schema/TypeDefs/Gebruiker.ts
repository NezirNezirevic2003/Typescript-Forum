import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const GebruikerType = new GraphQLObjectType({
  name: "Gebruiker",
  fields: () => ({
    id: { type: GraphQLID },
    naam: { type: GraphQLString },
    gebruikersnaam: { type: GraphQLString },
    wachtwoord: { type: GraphQLString },
  }),
});
