const {gql}=require("apollo-server");
module.exports= gql`
type Post {
  id: ID!
  body: String!
  username: String!
  createdAt: String!
}
type Query {
  getPosts:[Post]
}
type User{
  id:ID!
  email:String!
  username:String!
  token:String!
  createdAt:String!
}
input RegisterInput{
  username:String!
  password:String!
  confirmPassword:String!
  email:String!
}
type Mutation{
  register(registerInput:RegisterInput):User!
}
`;