import express from 'express'
import {
    createDiaryController,
    deleteDiaryController,
    fetchDiariesController,
    fetchDiaryController,
    updateDiaryController
} from '../controllers/index.js'

const diaryRouter = express.Router();

diaryRouter.post('/', createDiaryController);
diaryRouter.get('/', fetchDiariesController);
diaryRouter.get('/:id', fetchDiaryController);
diaryRouter.put('/:id', updateDiaryController);
diaryRouter.delete('/:id', deleteDiaryController);

export default diaryRouter;

