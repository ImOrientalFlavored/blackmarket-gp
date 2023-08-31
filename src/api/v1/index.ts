import express 
//{Request, Response,} 
from "express";
import productsRouter from "./products/routes/products.routes";
import usersRouter from "./users/routes/users.routes";
import cartsRouter from "./carts/routes/carts.routes";
import ordersRouter from "./orders/routes/orders.routes";

const router = express.Router();

router.get('/health', (_request, response, _next) => {
    response.send('OK')
})

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/carts', cartsRouter);
router.use('/orders', ordersRouter);


export default router;