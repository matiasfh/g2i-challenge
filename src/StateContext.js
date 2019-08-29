import React from "react";

export const initialState = {
  quiz: [],
  total: 0,
  answers: []
};
const StateContext = React.createContext(initialState);

const QUIZ_ENDPOINT =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
const STORE_QUIZ = "STORE_QUIZ";
const ANSWER_QUESTION = "ANSWER_QUESTION";
const RESET_GAME = "RESET_GAME";

const fetchQuiz = async () => {
  try {
    const response = await fetch(QUIZ_ENDPOINT);
    const json = await response.json();
    return json.results;
  } catch (e) {
    console.error(e);
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case STORE_QUIZ:
      return {
        ...state,
        quiz: action.payload.quiz,
        total: action.payload.quiz.length
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        answers: [...state.answers, action.payload.answer]
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export const StateProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StateContext.Provider
      value={{
        state,
        fetchQuiz,
        storeQuiz: quiz => {
          return dispatch({ type: STORE_QUIZ, payload: { quiz } });
        },
        answerQuestion: answer => {
          return dispatch({ type: ANSWER_QUESTION, payload: { answer } });
        },
        resetGame: () => {
          return dispatch({ type: RESET_GAME });
        }
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
