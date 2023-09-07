import express from "express";
import {
    listOrders,
    getOrder,
    editOrder,
    addOrder,
    deleteOrder,
} from "../controllers/orders.controllers.ts";

const router = express.Router();

router.get("/", listOrders);

router.get("/:id", getOrder);

router.put("/:id", editOrder);

router.post("/", addOrder);

router.delete("/:id", deleteOrder);

export default router;