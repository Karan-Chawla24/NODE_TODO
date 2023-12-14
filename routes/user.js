import express from "express";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.get("/profile", isAuthenticated, getMyProfile);

router.get("/logout", logout);


export default router;
