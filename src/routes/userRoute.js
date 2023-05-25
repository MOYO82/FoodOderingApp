import express from "express";
import UserController from '../controller/userController.js';
const router = new express.Router()

router.route("/login").post(login)
module.exports = router