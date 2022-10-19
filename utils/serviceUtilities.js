export const jsonResponse = (isSuccessful, responseData, error) => {
  return {
    isSuccessful,
    responseData,
    errorMessage: error
  }
}
