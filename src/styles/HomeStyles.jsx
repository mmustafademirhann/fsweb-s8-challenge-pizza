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

   h1 {
    font-size: 5rem; /* Font büyütüldü */
    font-weight: 50; /* ExtraBold olarak ayarlandı */
    text-transform: uppercase;
    font-family: "Barlow", sans-serif; /* Font değiştirildi */
    margin-bottom: 1rem;
    line-height: 1.2; /* Satır aralığı ayarlandı */
    max-width: 90%;
    white-space: pre-line;
    letter-spacing: 2px; /* Harf aralıklarını artırarak daha net görünmesini sağladık */
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
`;
