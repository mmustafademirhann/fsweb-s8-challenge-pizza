import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, Hero, Logo, Button } from "../styles/HomeStyles";
import logo from "../assets/logo.svg";
const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <Logo src={logo} alt="Teknolojik Yemekler Logo" />
        <h1>
  Kod Acıktırır <br />
  Pizza Doyurur
</h1>

        <Link to="/order">
          <Button>SİPARİŞ VER</Button>
        </Link>
      </Hero>
    </HomeContainer>
  );
};

export default Home;
