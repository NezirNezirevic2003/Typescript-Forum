import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Heading mt={3}>Home</Heading>
      </Container>
    </>
  );
};
