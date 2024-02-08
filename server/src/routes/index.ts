import { Router } from "express";

import urlRouter from "./urlRouter";
import userRouter from "./userRouter";
// import authRouter from "./authRouter";

const router = Router();

//all the routes here will use prefix /api e.g /url will be /api/url

router.use("/url", urlRouter);
router.use("/user", userRouter);
// router.use("/auth", authRouter);


// router.use("/url",urlRouter)
export default router;