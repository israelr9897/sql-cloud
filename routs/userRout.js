import express from "express";
import { addUser, getUserByName } from "./dal/userDal.js";

const router = express.Router();

router.post("/", addUser)
router.post("/login", getUserByName)

export default router;
