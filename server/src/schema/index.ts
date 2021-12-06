import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_PASSWORD,
} from "./Mutations/Gebruiker";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "./Mutations/Product";
import { GET_ALL_USERS } from "./Queries/Gebruiker";
import { GET_ALL_PRODUCTS } from "./Queries/Product";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllProducts: GET_ALL_PRODUCTS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createProduct: CREATE_PRODUCT,
    deleteProduct: DELETE_PRODUCT,
    updateProduct: UPDATE_PRODUCT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
