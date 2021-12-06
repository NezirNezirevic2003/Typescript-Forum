"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_1 = require("graphql");
var Gebruiker_1 = require("./Mutations/Gebruiker");
var Gebruiker_2 = require("./Queries/Gebruiker");
var RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: Gebruiker_2.GET_ALL_USERS,
    },
});
var Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: Gebruiker_1.CREATE_USER,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
