import express from 'express'
import reminderRouter from './reminder.routes.js'
import userRouter from "./users.routes.js";

const apiRouter = express.Router();

apiRouter.use('/reminders', reminderRouter);
apiRouter.use("/user", userRouter);

export default apiRouter;