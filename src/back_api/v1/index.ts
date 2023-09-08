import express 
//{Request, Response,} 
from "express";
import productRouter from "./routes/product.routes";
import userRouter from "./routes/user.routes";
import cartRouter from "./routes/cart.routes";
import orderRouter from "./routes/order.routes";
import loginRouter from "./routes/login.routes"

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