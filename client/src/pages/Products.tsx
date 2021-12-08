import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { ModalComponent } from "../components/Modal";
import { Navbar } from "../components/Navbar";

export const Products = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Heading mt={3}>Product dashboard</Heading>
        <ModalComponent
          mt={3}
          color="green"
          buttonText="Add product"
          modalTitle="Describe your product"
        />
      </Container>
    </>
  );
};
