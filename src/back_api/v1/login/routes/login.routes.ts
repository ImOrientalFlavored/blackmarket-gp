import { getLoginByName } from './../controllers/login.controllers';
import express, {Request, Response} from "express";
import {
    listLogins,
    editLogin,
    deleteLogin,
    getLoginById,
} from "../controllers/login.controllers.ts";
import { authenticate } from "middleware/auth.middleware.ts";
import { logger } from "middleware/logger.middleware.ts";

const router = express.Router();

router.use(logger)
router.param("id", (_request, _response, next, id) => {
  console.log("🚀 ~ file: Logins.routes.ts:15 ~ router.param ~ id:", id)
  next()
  return
    }
);
  
  router.route("/")
  .get((req:Request, res:Response, next)=>{
    const {username} = req.query;
    console.log("Get Login Query: " + req.query);
    console.log(username);
    
    if(username !== undefined) getLoginByName(req, res)
    else listLogins(req,res)

    //next();
  })

  router.route("/:id")
  .get(authenticate,(req, res)=>{
    console.log(req.query);
    getLoginById(req,res)
  })
  
  

  router.route("/:id")
  .put(editLogin)
  .delete(deleteLogin);

export default router;