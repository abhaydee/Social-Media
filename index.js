const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const Post = require("./modals/Post");
const User = require("./modals/User");
const typeDefs=require("./Graphql/TypeDefs")
const resolvers = {
  Query: {
    async getPosts(){
      try{
        const posts=await Post.find();
        return posts
      }
      catch(err){
        console.log("the error",err)
      }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then((res) => {
    console.log("mongodb connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
