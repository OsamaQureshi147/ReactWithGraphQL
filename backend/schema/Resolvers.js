const { users } = require("../data/db");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllUsers: () => users,
    getUserById: (parent, args) => {
      user = users.find((user) => user.id === args.id);
      if (user) {
        return user;
      }
      return null;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      console.log(parent);
      const user = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...args,
      };

      users.push(user);
      return user;
    },

    // createUserWithObjArgs: (parent, args) => {
    //   console.log(args);
    // },

    updateUser: (parent, args) => {
      console.log(args);
      const index = users.findIndex((user) => user.id == args.id);
      if (index !== -1) {
        users[index] = args;
        return args;
      }
      return null;
    },
    deleteUser: (parent, args) => {
      const index = users.findIndex((user) => user.id == args.id);
      if (index !== -1) {
        const user = users[index];
        users.splice(index, 1);
        return user;
      }
      return null;
    },
  },
};

module.exports = { resolvers };
