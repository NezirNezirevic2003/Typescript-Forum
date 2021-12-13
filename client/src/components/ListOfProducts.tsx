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
import { Image } from "@chakra-ui/react";
import { DELETE_PRODUCT } from "../graphql/Mutation";
import { GET_ALL_PRODUCTS } from "../graphql/Query";

export const ListOfProducts = () => {
  const { data } = useQuery(GET_ALL_PRODUCTS);
  const [deleteProduct, { error }] = useMutation(DELETE_PRODUCT);
  if (error) return <>{error}</>;
  return (
    <>
      <Table mt={10} variant="simple">
        <TableCaption>Producten</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">Id</Th>
            <Th textAlign="center">Naam</Th>
            <Th textAlign="center">Afbeelding</Th>
            <Th textAlign="center">Omschrijving</Th>
            <Th textAlign="center">Prijs</Th>
            <Th textAlign="center">Verwijderen</Th>
            <Th textAlign="center">Wijzigen</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.getAllProducts.map((product: any) => {
              return (
                <Tr key={product.id}>
                  <Td textAlign="center">{product.id}</Td>
                  <Td textAlign="center">{product.naam}</Td>
                  <Td>
                    <Image
                      alignItems="center"
                      boxSize="95%"
                      src={product.afbeelding}
                      alt="Dan Abramov"
                    />
                  </Td>
                  <Td textAlign="center">{product.omschrijving}</Td>
                  <Td textAlign="center">€{product.prijs}</Td>
                  <Td textAlign="center">
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteProduct({ variables: { id: product.id } });
                      }}
                    >
                      Verwijderen
                    </Button>
                  </Td>
                  <Td textAlign="center">
                    <Button
                      colorScheme="yellow"
                      // onClick={() => {
                      //   deleteProduct({ variables: { id: product.id } });
                      // }}
                    >
                      Wijzigigen
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
