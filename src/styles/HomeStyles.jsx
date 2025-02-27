import styled from "styled-components";
import banner from "../assets/home-banner.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ce2829;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 20px; /* Mobilde içerik yana yapışmasın */
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  z-index: 2;
  padding: 0 2rem;

  h1 {
    font-size: 5rem;
    font-weight: 50;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    margin-bottom: 1rem;
    line-height: 1.2;
    max-width: 90%;
    white-space: pre-line;
    letter-spacing: 2px;

    @media (max-width: 1024px) {
      font-size: 4rem; /* Tabletlerde küçült */
    }

    @media (max-width: 768px) {
      font-size: 3rem; /* Küçük ekranlar için küçült */
    }

    @media (max-width: 480px) {
      font-size: 2.5rem; /* Mobil için en uygun boyut */
    }
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  @media (max-width: 768px) {
    width: 150px; /* Küçük ekranlarda logo biraz küçülsün */
  }

  @media (max-width: 480px) {
    width: 120px; /* Mobilde daha da küçük */
  }
`;

export const Button = styled.button`
  background-color: #fdc913;
  color: #292929;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Satisfy", cursive;
  font-weight: bold;

  &:hover {
    background-color: #fae000;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem; /* Küçük ekranlar için biraz küçült */
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 1.5rem;
  }
`;
