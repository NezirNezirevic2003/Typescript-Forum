import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Users } from "./pages/Users";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Products />} path="/products"></Route>
          <Route element={<Users />} path="/users"></Route>
        </Routes>
      </ChakraProvider>
    </Router>
  </ApolloProvider>
);
