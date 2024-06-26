import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 30px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  gap: 5px;

  & > div {
    width: 100%;
  }

  img {
    width: 150px;
    height: 75px;
  }
`;
