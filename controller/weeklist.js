
const Weeklist = require("../models/weeklist");
const { createError } = require("../utils/error");

const findCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
};

const weeklist = (req, res) => {
  res.status(200).json({
    serverName: "Weeklist server",
    message: "success",
    currentTime: findCurrentTime(),
    state: "active",
  });
};

// get weeklist by id
const getWeeklistById = async(req,res)=>{
try {
  const getWeeklist = await Weeklist.findById(req.params.id)

  res.status(200).json(getWeeklist)
} catch (error) {
  next(createError(500,"can't find the weeklist",res))
}
}

// create weeklist
const addWeeklist = async (req, res, next) => {
  try {
    const getTotalWeeklist = await Weeklist.find();
    if (getTotalWeeklist.length > 1) {
      return next(createError(400, "two weeklist is active", res));
    }
  
    const newWeeklist = new Weeklist({
      tasksList:[{task:req.body.task,mark:req.body.mark}],
      finishTime: req.body.finishTime
    });
    await newWeeklist.save();
    res.status(200).json(newWeeklist);
  } catch (error) {
    next(createError(500, "internal error", res));
  }
};

// update weeklist
const updateWeeklist = async (req, res, next) => {
  try {
    const updatedweeklist = await Weeklist.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedweeklist) {
      return next(createError(400, "weeklist is not found", res));
    }
    res.status(200).json(updatedweeklist);
  } catch (error) {
    next(createError(500, "weeklist is not updated", res));
  }
};

// delete weeklist
const deleteWeeklist = async (req, res, next) => {
  try {
    const deleteWeeklist = await Weeklist.findByIdAndDelete(req.params.id);
    if (!deleteWeeklist) {
      return next(createError(400, "weeklist is not found", res));
    }

    res.status(200).json({
      message: "Weeklist is deleted",
    });
  } catch (error) {
    next(createError(500, "weeklist is not deleted", res));
  }
};


module.exports = {
  weeklist,
  addWeeklist,
  updateWeeklist,
  deleteWeeklist,
  getWeeklistById,
};
