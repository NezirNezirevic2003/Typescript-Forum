import { GraphQLID, GraphQLString } from "graphql";
import { Gebruiker } from "../../Entities/Gebruiker";
import { GebruikerType } from "../TypeDefs/Gebruiker";
import { StatusType } from "../TypeDefs/Status";

export const CREATE_USER = {
  type: GebruikerType,
  args: {
    naam: { type: GraphQLString },
    gebruikersnaam: { type: GraphQLString },
    wachtwoord: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { naam, gebruikersnaam, wachtwoord } = args;
    await Gebruiker.insert({
      naam,
      gebruikersnaam,
      wachtwoord,
    });
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: StatusType,
  args: {
    gebruikersnaam: { type: GraphQLString },
    oudeWachtwoord: { type: GraphQLString },
    nieuweWachtwoord: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { gebruikersnaam, oudeWachtwoord, nieuweWachtwoord } = args;
    const gebruiker = await Gebruiker.findOne({
      gebruikersnaam: gebruikersnaam,
    });

    if (!gebruiker) {
      throw new Error("Gebruikersnaam bestaat niet");
    }

    const gebruikerWachtwoord = gebruiker?.wachtwoord;

    if (oudeWachtwoord === gebruikerWachtwoord) {
      await Gebruiker.update(
        { gebruikersnaam: gebruikersnaam },
        { wachtwoord: nieuweWachtwoord }
      );
      return { gelukt: true, berricht: "Wachtwoord is succesvol veranderd" };
    } else {
      throw new Error("Wachtwoorden zijn onjuist");
    }
  },
};

export const DELETE_USER = {
  type: StatusType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Gebruiker.delete(id);

    return { gelukt: true, berricht: "Gebruiker is sucessvol verwijderd" };
  },
};
