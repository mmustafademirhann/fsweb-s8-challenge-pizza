import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #ce2829;
  color: white;
`;

export const SummaryBox = styled.div`
  background: white;
  color: black;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  min-width: 300px;
`;

export const Button = styled.button`
  background-color: #fdc913;
  color: black;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fae000;
  }
`;
