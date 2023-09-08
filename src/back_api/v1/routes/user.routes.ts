import express from "express";
import {
    listUsers,
    getUser,
    editUser,
    //addUser,
    deleteUser,
} from "../controllers/user.controllers.ts";

const router = express.Router();

router.param("id", (_request, _response, next, id) => {
    console.log("🚀 ~ file: Users.routes.ts:15 ~ router.param ~ id:", id)
    next() 
      }
  )
  
  router.route("/")
  .get(listUsers);
  //.post(addUser);
  
  router.route("/:id")
  .get(getUser)
  .put(editUser)
  .delete(deleteUser);

export default router;