const jwt = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(createError(401, "You are not authenticated!",res));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!",res));

    if(user.isAdmin){
        next()
    } else {
        next(createError(403,"you are not admin",res))
    }

   
  });
};



module.exports = {
  verifyToken,
  
};
