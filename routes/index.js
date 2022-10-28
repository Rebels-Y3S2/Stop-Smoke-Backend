import express from 'express'
import diaryRouter from './diary.routes.js'
import reminderRouter from './reminder.routes.js'
import userRouter from "./users.routes.js";

const apiRouter = express.Router();

apiRouter.use('/reminders', reminderRouter);
apiRouter.use("/users", userRouter);
apiRouter.use('/diaries', diaryRouter)

export default apiRouter;