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
import { Link } from "react-router-dom";
import { CREATE_USER } from "../graphql/Mutation";

interface ModalProps {
  color?: string;
  buttonText: string;
  modalTitle: string;
  mt: string | number;
}

export const CreateUserModal = ({
  color,
  buttonText,
  modalTitle,
  mt,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [naam, setNaam] = useState("");
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);
  if (error) return <div>{error}</div>;
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
            <FormControl mt={5} id="gebruikersnaam" isRequired>
              <FormLabel>Gberuikersnaam</FormLabel>
              <Input
                type="text"
                placeholder="gebruikersnaam"
                onChange={(event) => {
                  setGebruikersnaam(event.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={5} id="wachtwoord" isRequired>
              <FormLabel>Wachtwoord</FormLabel>
              <Input
                type="password"
                placeholder="wachtwoord"
                onChange={(event) => {
                  setWachtwoord(event.target.value);
                }}
              />
            </FormControl>
            <Link to="/gebruikers">
              <Button
                w="full"
                mt={5}
                colorScheme="blue"
                type="submit"
                onClick={() => {
                  createUser({
                    variables: {
                      naam: naam,
                      gebruikersnaam: gebruikersnaam,
                      wachtwoord: wachtwoord,
                    },
                  });
                }}
              >
                Toevoegen
              </Button>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
