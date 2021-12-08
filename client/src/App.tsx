import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Products } from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Products />} path="/products"></Route>
      </Routes>
    </ChakraProvider>
  </Router>
);
