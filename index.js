const {ApolloServer} = require("apollo-server")
const gql=require("graphql-tag");

const typedefs=gql`
  type Query{
    sayHi:String!
  }
`;

const resolvers={
  Query:{
    sayHi:()=>"Hello World"
  }
}