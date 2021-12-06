"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_USERS = void 0;
var graphql_1 = require("graphql");
var Gebruiker_1 = require("../../Entities/Gebruiker");
var Gebruiker_2 = require("../TypeDefs/Gebruiker");
exports.GET_ALL_USERS = {
    type: new graphql_1.GraphQLList(Gebruiker_2.GebruikerType),
    resolve: function () {
        return Gebruiker_1.Gebruiker.find();
    },
};
