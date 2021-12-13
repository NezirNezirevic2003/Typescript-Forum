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
import { DELETE_USER } from "../graphql/Mutation";
import { GET_ALL_USERS } from "../graphql/Query";

export const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);
  if (error) return <>{error}</>;
  return (
    <>
      <Table mt={10} variant="simple">
        <TableCaption>Gebruikers</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">Id</Th>
            <Th textAlign="center">Naam</Th>
            <Th textAlign="center">Gebruikersnaam</Th>
            <Th textAlign="center">Wachtwoord</Th>
            <Th textAlign="center">Verwijderen</Th>
            <Th textAlign="center">Wijzigen</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.getAllUsers.map((user: any) => {
              return (
                <Tr key={user.id}>
                  <Td textAlign="center">{user.id}</Td>
                  <Td textAlign="center">{user.naam}</Td>
                  <Td textAlign="center">{user.gebruikersnaam}</Td>
                  <Td textAlign="center">{user.wachtwoord}</Td>
                  <Td textAlign="center">
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteUser({ variables: { id: user.id } });
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
