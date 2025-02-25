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
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: -40px;
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

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;
export const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 sütun halinde hizalama */
  gap: 10px;
  width: 100%;
  justify-items: start; /* Kutuların içeriğini sola hizala */
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* İçeriği sola hizala */
  gap: 10px;
  font-size: 1rem;
  color: #292929;
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
  min-width: 150px;
  white-space: nowrap;
  text-align: left; /* Metni sola hizala */
  
  &:hover {
    background: #fdc913;
  }

  input {
    transform: scale(1.2);
    margin-left: 0; /* Checkbox'ı en sola yasla */
  }
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
  display: flex;
  gap: 15px;
  align-items: center;
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
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s ease;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: #fdc913;
  }

  input {
    transform: scale(1.2);
  }
`;
