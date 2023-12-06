const Weeklist = require("../models/weeklist")
const { createError } = require("./error"); 

const verifyTime = async(req,res,next)=>{
    try {
        const {createdAt} = await Weeklist.findById(req.params.id);
    const createdTime = new Date(createdAt);
    const currentTime = new Date();
    
    const difference = (createdTime - currentTime)/ (1000 * 60 * 60) ;
    if(difference > 24) {
      return next(createError(400, "You can't update the list, list creation time is more than 24hrs",res))
    } else {
        next()
    }
    } catch (error) {
         next(createError(500, "internal error",res))
    }
}

module.exports = {
    verifyTime
}