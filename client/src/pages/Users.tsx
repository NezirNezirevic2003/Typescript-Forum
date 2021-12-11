import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { CreateUserModal } from "../components/CreateUserModal";
import { Navbar } from "../components/Navbar";

export const Users = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Heading mt={3}>User dashboard</Heading>
        <CreateUserModal
          mt={3}
          color="green"
          buttonText="Add User"
          modalTitle="Describe your user"
        />
      </Container>
    </>
  );
};
