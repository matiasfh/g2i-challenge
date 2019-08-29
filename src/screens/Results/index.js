import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import StateContext from "../../StateContext";
import CTAButton from "../../components/CTAButton";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { getScore, isCorrect } from "../../selectors";

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  margin-left: -20px;
  color: black;
  &.correct {
    font-weight: bold;
    &::before {
      content: "+";
      color: green;
    }
  }
  &::before {
    font-size: 20px;
    content: "-";
    color: red;
    margin-left: -20px;
    margin-right: 10px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const Results = () => {
  const { state, resetGame } = React.useContext(StateContext);
  React.useEffect(() => {
    if (state.answers.length <= 0) {
      // Avoid the user to directly navigate to here
      navigate("/");
    }
  }, [state]);
  const onClickPlayAgain = () => {
    resetGame();
    navigate("/");
  };

  return (
    <Container>
      <h1>
        You Scored {getScore(state)}/{state.total}
      </h1>
      <Card>
        <List>
          {state.answers.map(item => {
            return (
              <ListItem
                key={item.question}
                className={isCorrect(item) ? "correct" : ""}
              >
                <span dangerouslySetInnerHTML={{ __html: item.question }} />
              </ListItem>
            );
          })}
        </List>
      </Card>
      <CTAButton onClick={onClickPlayAgain} text="Play Again" />
    </Container>
  );
};

export default Results;
