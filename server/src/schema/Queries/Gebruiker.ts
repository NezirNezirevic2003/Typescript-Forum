import { GraphQLList } from "graphql";
import { Gebruiker } from "../../Entities/Gebruiker";
import { GebruikerType } from "../TypeDefs/Gebruiker";

export const GET_ALL_USERS = {
  type: new GraphQLList(GebruikerType),
  resolve() {
    return Gebruiker.find();
  },
};
