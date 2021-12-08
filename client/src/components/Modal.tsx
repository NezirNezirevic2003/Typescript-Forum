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

interface ModalProps {
  color?: string;
  buttonText: string;
  modalTitle: string;
  mt: string | number;
}

export const ModalComponent = ({
  color,
  buttonText,
  modalTitle,
  mt,
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name of the product" />
              <FormLabel>Image</FormLabel>
              <Input placeholder="Image link of the product" />
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description of the product" />
              <FormLabel>Price</FormLabel>
              <Input placeholder="Price of the product" />
              <Button mt={5} w="full" colorScheme="blue">
                Add
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
