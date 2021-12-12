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
            <Th>Id</Th>
            <Th>Naam</Th>
            <Th>Gebruikersnaam</Th>
            <Th>Wachtwoord</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.getAllUsers.map((user: any) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.naam}</Td>
                  <Td>{user.gebruikersnaam}</Td>
                  <Td>{user.wachtwoord}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteUser({ variables: { id: user.id } });
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
