import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";
import { createConnection } from "typeorm";
import { Gebruiker } from "./Entities/Gebruiker";
import { Product } from "./Entities/Product";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "webshop",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Gebruiker, Product],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("server werkt");
  });
};

main().catch((err) => {
  console.log(err);
});
