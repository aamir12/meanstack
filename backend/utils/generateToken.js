const jwt = require("jsonwebtoken");
const generateToken = (data) => {
  console.log("generateToken",data);
  let encryData = null;
  if(typeof data === "object"){
    encryData = {...data}
  }else{
    encryData = {id:data}
  }
  return jwt.sign(encryData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

module.exports = generateToken;
