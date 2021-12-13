import { useMutation } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { useState } from "react";
import { CREATE_PRODUCT } from "../graphql/Mutation";

interface ModalProps {
  color?: string;
  buttonText: string;
  modalTitle: string;
  mt: string | number;
}

export const CreateProductModal = ({
  color,
  buttonText,
  modalTitle,
  mt,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [naam, setNaam] = useState("");
  const [afbeelding, setAfbeelding] = useState("");
  const [omschrijving, setOmschrijving] = useState("");
  const [prijs, setPrijs] = useState("");

  const [createProduct, { error }] = useMutation(CREATE_PRODUCT);
  if (error) {
    <div>{error}</div>;
  }
  return (
    <>
      <Button colorScheme={color} mt={mt} onClick={onOpen}>
        {buttonText}
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <FormControl mt={10} id="naam" isRequired>
              <FormLabel>Naam</FormLabel>
              <Input
                type="text"
                placeholder="naam"
                onChange={(event) => {
                  setNaam(event.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={5} id="afbeelding" isRequired>
              <FormLabel>Afbeelding</FormLabel>
              <Input
                type="text"
                placeholder="afbeelding"
                onChange={(event) => {
                  setAfbeelding(event.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={5} id="omschrijving" isRequired>
              <FormLabel>Omschrijving</FormLabel>
              <Input
                type="text"
                placeholder="omschrijving"
                onChange={(event) => {
                  setOmschrijving(event.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={5} id="prijs" isRequired>
              <FormLabel>Prijs</FormLabel>
              <Input
                type="text"
                placeholder="prijs"
                onChange={(event) => {
                  setPrijs(event.target.value);
                }}
              />
            </FormControl>
            <Button
              w="full"
              mt={5}
              colorScheme="blue"
              type="submit"
              onClick={() => {
                createProduct({
                  variables: {
                    naam: naam,
                    afbeelding: afbeelding,
                    omschrijving: omschrijving,
                    prijs: prijs,
                  },
                });
              }}
            >
              Toevoegen
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
