const Post=require("../modals/Post")
module.exports={
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
}