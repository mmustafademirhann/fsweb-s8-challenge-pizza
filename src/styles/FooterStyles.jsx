import styled from 'styled-components';


export const Footer = styled.footer`
  background-color: #111111;
  padding: 40px 0;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%; /* Tam genişlik kullanın */
  box-sizing: border-box; /* Padding'in genişliğe dahil edilmesini sağlar */
  margin: 0; /* Kenar boşluklarını sıfırlayın */
  
  @media (max-width: 767px) {
    padding: 30px 15px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 0;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  
  img {
    width: 18px;
    height: 18px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 300px;
  
  img {
    width: 100%;
    height: 65px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 20px;
  width: calc(100% - 40px);
  
  p {
    font-size: 14px;
    color: #999;
    margin: 0;
  }
  
  a {
    display: inline-block;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;