const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modals/User");
const { SECRET_KEY } = require("../config");
const { UserInputError } = require("apollo-server");
const  {validateRegisteredInput, validateLoginInput}  = require("../Validations");
console.log("the function",validateRegisteredInput)
function generateToken(user){
  const token = jwt.sign(
    {
      id: res.id,
      email: res.email,
      username: res.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}
module.exports = {
  Mutation: {
    async login(_,username,password
    ){
      const {errors,valid}=validateLoginInput(username,password);
      const user=await User.findOne({username})
      if(!user){
        errors.general="User not found"
        throw new UserInputError("User not found",{errors})
      }
      const match=await bcrypt.compare(password,user.password);
      if(!match){
        errors.general="Wrong credentials"
        throw new UserInputError("wrong credentials",{errors})
      }
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      const { valid, errors } = validateRegisteredInput(
        username,
        email,
        password,
        confirmPassword
      );
      if(!valid){
        throw new UserInputError("errors",{errors})
      }
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "Username is taken",
          },
        });
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
     
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
