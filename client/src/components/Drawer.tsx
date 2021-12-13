import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { ButtonComponent } from "./Button";
import { Link } from "react-router-dom";

interface DrawerMenuProps {
  header?: string;
  textalign?: string | undefined;
}

export const DrawerMenu = ({ header, textalign }: DrawerMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        size="lg"
        fontSize="25px"
        variant="ghost"
        color="teal"
        marginLeft="2"
        float="right"
        onClick={onOpen}
        icon={<FaBars />}
        aria-label="menu-icon"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="teal" size="lg" fontSize="25px" />
          <DrawerHeader textAlign="center">{header}</DrawerHeader>
          <DrawerBody>
            <Link to="/">
              <ButtonComponent
                fontsize={23}
                text="Home"
                color="teal"
                width="full"
              />
            </Link>
            <Link to="/producten">
              <ButtonComponent
                fontsize={23}
                text="Producten"
                color="teal"
                width="full"
                margintop={3}
              />
            </Link>
            <Link to="/gebruikers">
              <ButtonComponent
                fontsize={23}
                text="Gebruikers"
                color="teal"
                width="full"
                margintop={3}
              />
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
