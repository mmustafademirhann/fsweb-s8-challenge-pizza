import React from "react";
import { Link } from "react-router-dom";
import  {FooterComponent} from "./FooterComponent.jsx";
import { HomeContainer, Hero, Logo, Button, Content, PromoSection, IconButtonGroup, FoodImageSection } from "../styles/HomeStyles";
import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero>
          <Logo src={logo} alt="Teknolojik Yemekler Logo" />
          <h1>
            Kod Acıktırır <br />
            Pizza, Doyurur
          </h1>
          <Link to="/order">
            <Button>SİPARİŞ VER</Button>
          </Link>
        </Hero>
      </HomeContainer>
      <IconButtonGroup>
          {[
            { name: "Ramen", icon: "1.svg" },
            { name: "Pizza", icon: "2.svg" },
            { name: "Burger", icon: "3.svg" },
            { name: "French fries", icon: "4.svg" },
            { name: "Fast food", icon: "5.svg" },
            { name: "Soft drinks", icon: "6.svg" }
          ].map((category, index) => (
            <button key={index}>
              <img src={`images/iteration-2-images/icons/${category.icon}`} alt={category.name} />
              {category.name}
            </button>
          ))}
        </IconButtonGroup>
      {/* 🔥 KAMPANYA KARTLARI (Content'in DIŞINA ÇIKARDIM) */}
      <PromoSection>
        {/* Soldaki Büyük Kart */}
        <div className="promo-large" style={{ backgroundImage: "url('images/iteration-2-images/cta/kart-1.png')" }}>
          <h2>Özel Lezzetus</h2>
          <p>Position Absolute Acı Burger</p>
          <button>SİPARİŞ VER</button>
        </div>

        {/* Sağdaki İki Küçük Kart */}
        <div className="promo-wrapper">
          <div className="promo-dark" style={{ backgroundImage: "url('images/iteration-2-images/cta/kart-2.png')" }}>
            <h2>Hackathlon Burger Menüsü</h2>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="promo-light" style={{ backgroundImage: "url('images/iteration-2-images/cta/kart-3.png')" }}>
            <h2>Çooook hızlı npm gibi kurye</h2>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
      </PromoSection>
      

      {/* 🏆 ORTA BÖLÜM */}
      <Content>
        <h2>En Çok Paketlenen Menüler</h2>
        <p>Acıktıran Kodlara Doyuran Lezzetler</p>

        {/* 6 Butonlu Kategori Seçimi */}
        <IconButtonGroup>
          {[
            { name: "Ramen", icon: "1.svg" },
            { name: "Pizza", icon: "2.svg" },
            { name: "Burger", icon: "3.svg" },
            { name: "French fries", icon: "4.svg" },
            { name: "Fast food", icon: "5.svg" },
            { name: "Soft drinks", icon: "6.svg" }
          ].map((category, index) => (
            <button key={index}>
              <img src={`images/iteration-2-images/icons/${category.icon}`} alt={category.name} />
              {category.name}
            </button>
          ))}
        </IconButtonGroup>

        {/* 🍕 3 Büyük Görselli Bölüm */}
        <FoodImageSection>
          {["food-1.png", "food-2.png", "food-3.png"].map((food, index) => (
            <img key={index} src={`images/iteration-2-images/pictures/${food}`} alt={`Food ${index + 1}`} />
          ))}
        </FoodImageSection>
      </Content>

      {/* ⚫ FOOTER BÖLÜMÜ */}
      <FooterComponent/>
       
    </>
  );
};

export default Home;
