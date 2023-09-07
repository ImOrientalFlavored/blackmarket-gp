import express from "express";
import {
    listCarts,
    getCart,
    editCart,
    addCart,
    deleteCart,
} from "../controllers/carts.controllers.ts";

const router = express.Router();

router.get("/", listCarts);

router.get("/:id", getCart);

router.put("/:id", editCart);

router.post("/", addCart);

router.delete("/:id", deleteCart);

export default router;