import { createDiary, deleteDiary, fetchDiaries, fetchDiary, updateDiary } from "../repository/index.js";

// Create diary service logic
export const createDiaryService = (data) => {
    const { userId, title, description, isFavorite } = data
    return createDiary({ userId, title, description, isFavorite })
}

// Fetch diaries service logic
export const fetchDiariesService = () => {
    return fetchDiaries()
}

// Fetch diary service logic
export const fetchDiaryService = (id) => {
    return fetchDiary(id)
}

// Update diary service logic
export const updateDiaryService = (id, data) => {
    return updateDiary(id, data)
}

// Delete diary service logic
export const deleteDiaryService = (id) => {
    return deleteDiary(id)
}