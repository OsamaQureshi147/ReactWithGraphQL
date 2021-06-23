const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./schema/Schema");
const { resolvers } = require("./schema/Resolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // const token = req.headers.authorization || "";

    // Try to retrieve a user with the token
    const user = "user info....";

    // Add the user to the context
    return { user };
  },
});
server.applyMiddleware({ app });

app.listen({ port: 5000 }, () => console.log(`server running at ${5000}`));
