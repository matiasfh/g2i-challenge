import React from "react";
import { navigate } from "@reach/router";
import StateContext from "../../StateContext";
import CTAButton from "../../components/CTAButton";
import Container from "../../components/Container";
import Card from "../../components/Card";

const Home = () => {
  const { fetchQuiz, storeQuiz } = React.useContext(StateContext);
  const onClickBegin = async () => {
    const quiz = await fetchQuiz();
    storeQuiz(quiz);
    navigate("/quiz/1");
  };
  return (
    <Container>
      <h1>Welcome to the Trivia Challenge</h1>
      <Card>
        <p>You will be presented with 10 True or False questions</p>
        <p>Will you score 100%?</p>
      </Card>
      <CTAButton onClick={onClickBegin} text="Begin" />
    </Container>
  );
};

export default Home;
