import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      naam
      gebruikersnaam
      wachtwoord
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      id
      naam
      afbeelding
      omschrijving
      prijs
    }
  }
`;
