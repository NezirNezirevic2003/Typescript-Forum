import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { CreateProductModal } from "../components/CreateProductModal";
import { ListOfProducts } from "../components/ListOfProducts";
import { Navbar } from "../components/Navbar";

export const Products = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Heading mt={3}>Product dashboard</Heading>
        <CreateProductModal
          mt={3}
          color="green"
          buttonText="Product toevoegen"
          modalTitle="Omschrijf uw product"
        />
        <ListOfProducts />
      </Container>
    </>
  );
};
