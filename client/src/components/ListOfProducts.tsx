import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DELETE_PRODUCT } from "../graphql/Mutation";
import { GET_ALL_PRODUCTS } from "../graphql/Query";

export const ListOfProducts = () => {
  const [deleteProduct, { error }] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(GET_ALL_PRODUCTS);
  return (
    <>
      <Table mt={10} variant="simple">
        <TableCaption>Producten</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Naam</Th>
            <Th>Afbeelding</Th>
            <Th>Omschrijving</Th>
            <Th>Prijs</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.getAllProducts.map((product: any) => {
              return (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.naam}</Td>
                  <Td>{product.afbeelding}</Td>
                  <Td>{product.omschrijving}</Td>
                  <Td>{product.prijs}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteProduct({ variables: { id: product.id } });
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};
