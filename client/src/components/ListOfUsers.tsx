import { useQuery } from "@apollo/client";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { GET_ALL_USERS } from "../graphql/Query";

export const ListOfUsers = () => {
  const { data, error } = useQuery(GET_ALL_USERS);
  if (data) {
    console.log(data);
  }
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
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};
