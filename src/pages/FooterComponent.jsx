import {
  Footer,
  FooterContent,
  FooterSection,
  ContactInfo,
  MenuList,
  InstagramGrid,
  FooterBottom
  } from '../styles/FooterStyles.jsx';
  
  const FooterComponent = () => {
  return (
    <Footer>
      <FooterContent>
        <FooterSection>
          <h2>Teknolojik Yemekler</h2>
          <ContactInfo>
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres İkonu" />
            <p>341 Londonderry Road, İstanbul Türkiye</p>
            
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="E-mail İkonu" />
            <p>aciktim@teknolojikyemekler.com</p>
            
            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon İkonu" />
            <p>+90 216 123 45 67</p>
          </ContactInfo>
        </FooterSection>
        <FooterSection>
          <h3>Sıccacık Menüler</h3>
          <MenuList>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Değil Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </MenuList>
        </FooterSection>

        {/* Instagram Section */}
        <FooterSection>
          <h3>Instagram</h3>
          <InstagramGrid>
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram Post" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram Post" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram Post" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram Post" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram Post" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram Post" />
          </InstagramGrid>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>© 2023 Teknolojik Yemekler</p>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
      </FooterBottom>
    </Footer>
  );
};
  
export {FooterComponent};