"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GebruikerType = void 0;
var graphql_1 = require("graphql");
exports.GebruikerType = new graphql_1.GraphQLObjectType({
    name: "Gebruiker",
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        naam: { type: graphql_1.GraphQLString },
        gebruikersnaam: { type: graphql_1.GraphQLString },
        wachtwoord: { type: graphql_1.GraphQLString },
    }); },
});
