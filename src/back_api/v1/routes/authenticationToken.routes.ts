import express from "express";
import {
    listAuthTokens,
    getAuthToken,
    editAuthToken,
    addAuthToken,
    deleteAuthToken,
} from "../controllers/authenticationToken.controllers.ts";
import { verifyAccessToken } from "middleware/verifyAccessToken.middleware.ts";

const router = express.Router();
router.all("*", verifyAccessToken)
router.get("/", listAuthTokens);
router.get("/:id", getAuthToken);
router.put("/:id", editAuthToken);
router.post("/", addAuthToken);
router.delete("/:id", deleteAuthToken);

export default router;