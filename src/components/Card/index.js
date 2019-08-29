import styled from "styled-components";

const Card = styled.div`
  border: 1px solid;
  border-image-source: linear-gradient(to right, #67b26b, #4ca2cb);
  border-image-slice: 1;
  padding: 20px;
  margin-bottom: 10px;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    flex: 1;
    min-height: 100px;
  }
`;

export default Card;
