//shuffle the array that contains the correct answer and all other possible answers
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
