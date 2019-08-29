export const getQuizById = (state, id) => {
  const quizId = id - 1; //Just because the id used to navigate starts at 1 and the quiz index start at 0
  return state.quiz[quizId];
};

export const getScore = state => {
  const { answers } = state;
  return answers.filter(answer => {
    return answer.correct_answer === answer.answer;
  }).length;
};

export const isCorrect = quiz => {
  return quiz.correct_answer === quiz.answer;
};
