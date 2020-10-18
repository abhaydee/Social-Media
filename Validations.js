const validateRegisteredInput=(username,email,password,confirmPassword)=>{
  const errors={

  }
  if(username.trim()===""){
    errors.username="Username cannot be empty"
  }
  if(email.trim()!==""){
    errors.email="Email Address cannot be empty"
  }
  else{
      const emailRegEx=RegExp(/\S+@\S+\.\S+/)
      if(!email.match(emailRegEx)){
        errors.email="Email address is invalid"
      }
  }
  if(password===""){
    errors.password="Password cannot be empty"
  }
  else if(password!==confirmPassword){
    errors.password="Please enter the same password"
  }
  return {
    errors,
    valid:Object.keys(errors).length<1
  }
}

module.exports=validateRegisteredInput;