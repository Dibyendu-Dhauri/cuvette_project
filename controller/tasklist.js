const Weeklist = require("../models/weeklist");
const { createError } = require("../utils/error");

const createNewTask = async (req, res, next) => {
  try {
    
    const taskList = await Weeklist.findByIdAndUpdate(req.params.id, {
      $push: {
        tasksList: req.body,
      },
    });
    
    res.status(200).json(taskList);
  } catch (error) {
    next(createError(500, "tasklist is not created", res));
  }
};

module.exports = {
  createNewTask,
};
