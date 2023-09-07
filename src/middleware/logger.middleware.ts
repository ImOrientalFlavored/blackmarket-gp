import {Request, Response, NextFunction} from 'express';

const logger = function (req:Request, _res:Response, next:NextFunction) {
  console.log(req.params);
  console.log(req.headers)
  console.log(req.body)
  next()
}

export { logger }