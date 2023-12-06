const createError = (status, message, res) => {
  return res.status(status).json({
    success: false,
    status: status || 500,
    message: message || "Something went wrong!",
  });
};

module.exports = {
  createError,
};
