const PostResolvers=require("./Posts");
const UserResolvers=require("./Users");

module.exports={
  Query:{
    ...PostResolvers.Query
  },
  Mutation:{
    ...UserResolvers.Mutation
  }
}
