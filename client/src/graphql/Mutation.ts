import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $naam: String!
    $afbeelding: String!
    $omschrijving: String!
    $prijs: String!
  ) {
    createProduct(
      naam: $naam
      afbeelding: $afbeelding
      omschrijving: $omschrijving
      prijs: $prijs
    ) {
      id
      naam
      afbeelding
      omschrijving
      prijs
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $naam: String!
    $gebruikersnaam: String!
    $wachtwoord: String
  ) {
    createUser(
      naam: $naam
      gebruikersnaam: $gebruikersnaam
      wachtwoord: $wachtwoord
    ) {
      id
      naam
      gebruikersnaam
      wachtwoord
    }
  }
`;
