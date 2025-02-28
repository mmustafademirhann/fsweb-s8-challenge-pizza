import styled from "styled-components";
import banner from "../assets/home-banner.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
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


  export const Content = styled.section`
  width: 80%;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    color: #ce2829;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;


export const MenuSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 85%;
  margin: 40px auto;
  flex-wrap: wrap;

  div {
    background: white;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    width: 260px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 190px;
    border-radius: 12px;
    object-fit: cover;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const IconSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  img {
    width: 50px;
    height: auto;
  }
`;

export const IconButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;

  button {
    background: white;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
    display: flex;
    align-items: center; /* İkon ve metni hizalar */
    gap: 8px; /* İkon ile metin arasındaki boşluğu ayarlar */

    &:hover, &:focus {
      background: black;
      color: white;
    }

    img {
      width: 20px; /* Buton içindeki ikonların boyutunu belirler */
      height: auto;
      margin-right: 5px; /* İkonu metnin soluna almak için boşluk bırakır */
    }
  }
`;
export const FoodImageSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;

  img {
    width: 280px;
    height: auto;
    border-radius: 12px;
  }
`;

export const PromoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Kartları tam ortalar */
  gap: 30px; /* Kartlar arasındaki boşluk */
  width: 100%;
  max-width: 1100px; /* Maksimum genişlik ayarı (çok büyük olmasın) */
  margin: 50px auto; /* Ortalamak için */
  padding: 20px; /* İçerik ile çerçeve arasında boşluk bırakır */

  /* Soldaki Büyük Kart */
  .promo-large {
    flex: 6; /* Sol kart büyük olacak */
    height: 500px;
    background-size: cover;
    background-position: center;
    color: white;
    padding: 50px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Sağdaki İki Küçük Kart */
  .promo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 6; /* Sağdaki kartlar daha küçük */
  }

  .promo-dark, .promo-light {
    height: 240px;
    background-size: cover;
    background-position: center;
    color: white;
    padding: 25px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .promo-dark {
    background-color: #111;
  }

  .promo-light {
    background-color: #f5d7a1;
    color: #333;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  button {
    background-color: white;
    color: black;
    border: none;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 24px;
    cursor: pointer;
    align-self: flex-start;
    transition: 0.3s;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  /* RESPONSIVE TASARIM (Mobil & Tablet İçin) */
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    
    .promo-large {
      width: 100%;
      flex: none;
      height: 350px;
    }

    .promo-wrapper {
      width: 100%;
      flex: none;
    }

    .promo-dark, .promo-light {
      width: 100%;
      height: 180px;
    }
  }
`;
