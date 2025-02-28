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
  font-family: "Arial", sans-serif;
`;

export const SummaryBox = styled.div`
  background: white;
  color: black;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  margin: 1rem 0;
  min-width: 320px;
  border: 2px solid white;
`;

export const Button = styled.button`
  background-color: #fdc913;
  color: black;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #fae000;
  }
`;
export const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const SubHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const HighlightText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fdc913;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;