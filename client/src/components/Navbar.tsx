import { Container } from "@chakra-ui/layout";
import { Avatar, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Logo from "../assets/Logo.svg";
import { DrawerMenu } from "./Drawer";
import { ButtonComponent } from "./Button";

export const Navbar: FC = () => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Box m={2} p={2}>
          <Avatar alt="logo" src={Logo} />
          <DrawerMenu header="Menu" />
          <ButtonComponent
            text="Login"
            color="teal"
            float="right"
            height="3rem"
            ml={3}
          />
          <ColorModeSwitcher float="right" />
        </Box>
      </Container>
    </Box>
  );
};
