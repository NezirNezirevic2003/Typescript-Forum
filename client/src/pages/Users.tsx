import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { CreateUserModal } from "../components/CreateUserModal";
import { ListOfUsers } from "../components/ListOfUsers";
import { Navbar } from "../components/Navbar";

export const Users = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Heading mt={3}>Gebruiker dashboard</Heading>
        <CreateUserModal
          mt={3}
          color="green"
          buttonText="Gebruiker toevoegen"
          modalTitle="Omschrijf uw gebruiker"
        />
        <ListOfUsers />
      </Container>
    </>
  );
};
