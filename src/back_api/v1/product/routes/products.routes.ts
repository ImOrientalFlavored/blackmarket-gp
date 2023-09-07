import express from "express";
import {
  listProducts,
  getProduct,
  editProduct,
  addProduct,
  deleteProduct,
} from "../controllers/products.controllers.ts";

const router = express.Router();

router.param("id", (_request, _response, next, id) => {
  console.log("🚀 ~ file: products.routes.ts:15 ~ router.param ~ id:", id)
  next() 
	}
)

router.route("/")
.get(listProducts)
.post(addProduct);

router.route("/:id")
.get(getProduct)
.put(editProduct)
.delete(deleteProduct);


export default router;