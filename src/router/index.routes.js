import { Router } from "express";
import userRoutes from "./users.routes.js";
import productsRouter from './products.routes.js';
import cartsRouter from './carts.routes.js';

const router = Router();

// Define las rutas en el enrutador
router.use("/", userRoutes);
router.use('/products', productsRouter);
router.use('/carts', cartsRouter);

export default router;