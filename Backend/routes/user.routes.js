const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controller");

const auth = require("../middleware/auth");
const user = require("../middleware/user.middleware");
const admin = require("../middleware/admin.middleware");

router.post("/signup", usercontroller.signup);

// router.post("/login", usercontroller.login);

// // auth("manageUsers")
// router.get("/all", auth, admin, usercontroller.getUsers);
// router.get("/profile", auth, usercontroller.getUserProfile);

module.exports = router;
