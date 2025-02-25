import React from "react";
import { useHistory } from "react-router-dom";
import { SuccessContainer, SummaryBox, Button } from "../styles/SuccessStyles";

const Success = ({ orderData }) => {
  const history = useHistory();

  if (!orderData) {
    return (
      <SuccessContainer>
        <h2>Hata! Sipariş Bilgisi Bulunamadı.</h2>
        <Button onClick={() => history.push("/")}>Anasayfaya Dön</Button>
      </SuccessContainer>
    );
  }

  return (
    <SuccessContainer>
      <h1>Lezzetin Yolda!</h1>
      <h2>SİPARİŞ ALINDI</h2>
      <p><strong>{orderData.name}</strong> için sipariş oluşturuldu.</p>

      <SummaryBox>
        <p><strong>Boyut:</strong> {orderData.size}</p>
        <p><strong>Hamur:</strong> {orderData.dough}</p>
        <p><strong>Ek Malzemeler:</strong> {orderData.toppings.join(", ") || "Yok"}</p>
        <p><strong>Adet:</strong> {orderData.quantity}</p>
        <p><strong>Sipariş Toplamı:</strong> {parseFloat(orderData.price).toFixed(2)}₺</p>
      </SummaryBox>

      <Button onClick={() => history.push("/")}>Anasayfaya Dön</Button>
    </SuccessContainer>
  );
};

export default Success;
