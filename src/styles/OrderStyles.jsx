import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #faf7f2;
`;

export const Header = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ce2829;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
`;
export const ContentWrapper = styled.div`
  width: 50%;
  max-width: 700px; 
  min-width: 500px;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  margin-top: 0px;
  flex-shrink: 0; /* Daralmayı önlemek için */


  @media (max-width: 480px) {
    width: calc(100% - 20px); 
    padding: 1.5rem;
  }
`;





export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: #292929;
`;


export const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Dinamik kolon ayarı */
  gap: 10px;
  width: 100%;
  justify-items: start;
`;




export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  button {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border: none;
    background-color: #fdc913;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background-color: #fae000;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const SummaryBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: #fdc913;
  color: black;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #fae000;
  }
`;
export const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
  gap: 10px;
  width: 100%;
  justify-items: center;
`;



export const ErrorText = styled.p`
  background-color: rgba(255, 0, 0, 0.1); 
  color: #d32f2f;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 12px;
  margin-top: 5px;
  border-left: 4px solid #d32f2f;
  border-radius: 5px; 
  display: flex;
  align-items: center;
  gap: 8px; 
  
  &::before {
    content: "⚠️";
    font-size: 16px;
  }
`;


export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc; 
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #888; 
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #888;
    outline: none;
  }
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #292929;
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd; 
  cursor: pointer;
  transition: border 0.3s ease, background 0.3s ease;
  width: 100%;
  min-width: 150px;
  text-align: left;

  &:hover {
    background:rgb(255, 200, 0); 
    border-color: #bbb;
  }

  input {
    transform: scale(1.2);
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: #292929;
  background-color: white;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc; 
  cursor: pointer;
  transition: border 0.3s ease, background 0.3s ease;

  &:hover {
    background: #fdc913;
    border-color: #888; /* Hover'da biraz daha koyulaşsın */
  }

  input {
    transform: scale(1.2);
  }
`;
