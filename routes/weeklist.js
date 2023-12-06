const express = require("express");
const router = express.Router();
const {weeklist,addWeeklist,updateWeeklist, deleteWeeklist,getWeeklistById} = require("../controller/weeklist")
const {verifyToken} = require("../utils/verifyToken")
const {verifyTime} = require("../utils/verifyTime")


router.get("/",weeklist)
router.get("/:id",getWeeklistById)
router.post("/add",verifyToken,addWeeklist)
router.put("/update/:id",verifyToken,verifyTime,updateWeeklist)
router.delete("/delete/:id",verifyToken,verifyTime,deleteWeeklist)



module.exports = router;


