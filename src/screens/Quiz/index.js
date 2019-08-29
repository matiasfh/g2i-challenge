import React from "react";
import { navigate } from "@reach/router";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import CTAButton from "../../components/CTAButton";
import Container from "../../components/Container";
import RadioButtons from "../../components/RadioButtons";
import StateContext from "../../StateContext";
import { getQuizById } from "../../selectors";

const Quiz = ({ id }) => {
  const { state, answerQuestion } = React.useContext(StateContext);
  const [answerState, setSelectedAnswer] = React.useState();
  React.useEffect(() => {
    if (state.total <= 0) {
      // Avoid the user to directly navigate to here
      navigate("/");
    }
    if (state.answers.length >= state.total) {
      localStorage.setItem("state", JSON.stringify(state));
      navigate("/results");
    }
  }, [state]);

  const quiz = getQuizById(state, id);

  const handleNextClick = async () => {
    // Stores the answer and navigate to next question or
    // results screen
    answerQuestion({ ...quiz, answer: answerState });
    navigate(`/quiz/${parseInt(id, 10) + 1}`);
  };

  const handleAnswerChange = event => {
    setSelectedAnswer(event.target.value);
  };

  const disabledButton = status => {
    return status === undefined;
  };
  return quiz == null ? (
    <Loading />
  ) : (
    <Container>
      <h1>{quiz.category}</h1>
      <Card>
        <p dangerouslySetInnerHTML={{ __html: quiz.question }} />
        <RadioButtons
          items={[
            {
              id: 1,
              value: "True",
              onChange: handleAnswerChange,
              label: "True"
            },
            {
              id: 2,
              value: "True",
              onChange: handleAnswerChange,
              label: "False"
            }
          ]}
        />

        <CTAButton
          onClick={handleNextClick}
          text="Next"
          disabled={disabledButton(answerState)}
        />
      </Card>
      <p>
        {id} of {state.total}
      </p>
    </Container>
  );
};

export default Quiz;
