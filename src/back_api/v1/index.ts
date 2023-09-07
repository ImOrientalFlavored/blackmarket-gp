import express 
//{Request, Response,} 
from "express";
import productRouter from "./product/routes/products.routes";
import userRouter from "./user/routes/users.routes";
import cartRouter from "./cart/routes/carts.routes";
import orderRouter from "./order/routes/orders.routes";
import loginRouter from "./login/routes/login.routes"

const router = express.Router();

router.get('/health', (_request, response, _next) => {
    response.send('OK')
})

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/carts', cartRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter)


export default router;