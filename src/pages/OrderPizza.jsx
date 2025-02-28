import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FooterComponent } from "./FooterComponent";
import {
    OrderContainer,
    Header,
    Logo,
    ContentWrapper,
    Form,
    Label,
    Input,
    Select,
    CheckboxGroup,
    CheckboxLabel,
    QuantityBox,
    SummaryBox,
    Button,
    RadioGroup,
    RadioLabel,
    ErrorText
} from "../styles/OrderStyles";
import logo from "../assets/logo.svg";

const toppingsList = ["Pepperoni", "Sosis", "Mısır", "Sucuk", "Ananas", "Jalapeno", "Domates", "Biber", "Kanada Jambonu", "Soğan", "Sarımsak"];

const OrderPizza = ({ setOrderData }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        dough: "",
        toppings: [],
        note: "",
        quantity: 1,
        price: 85.5,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToppingsChange = (topping) => {
        setFormData((prevData) => ({
            ...prevData,
            toppings: prevData.toppings.includes(topping)
                ? prevData.toppings.filter((t) => t !== topping)
                : [...prevData.toppings, topping],
        }));
    };

    const handleQuantityChange = (type) => {
        setFormData((prevData) => ({
            ...prevData,
            quantity: type === "increase" ? prevData.quantity + 1 : Math.max(1, prevData.quantity - 1),
        }));
    };

    const validationRules = [
        { condition: formData.name.length < 3, key: "name", message: "İsim en az 3 karakter olmalı." },
        { condition: !formData.size, key: "size", message: "Lütfen bir boyut seçin." },
        { condition: !formData.dough, key: "dough", message: "Lütfen hamur kalınlığını seçin." },
        { condition: formData.toppings.length < 4 || formData.toppings.length > 10, key: "toppings", message: "En az 4, en fazla 10 malzeme seçmelisiniz." }
    ];

    const validateForm = () => {
        let hasError = false; // Hata olup olmadığını takip etmek için

        const newErrors = validationRules.reduce((errors, rule) => {
            if (rule.condition) {
                errors[rule.key] = rule.message;
                hasError = true; // Eğer bir hata varsa, bunu true yap
            }
            return errors;
        }, {});

        setErrors(newErrors);
        return !hasError; // Eğer hata varsa false, yoksa true döndür
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post("https://reqres.in/api/pizza", formData);
            console.log("Sipariş Başarılı:", response.data);
            setOrderData(response.data);
            history.push("/success");
        } catch (error) {
            console.error("Sipariş başarısız:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <OrderContainer>
                <Header>
                    <Logo src={logo} alt="Teknolojik Yemekler" />
                </Header>
                <img
                    src="/images/iteration-2-images/pictures/form-banner.png"
                    alt="Form Banner"
                    style={{
                        width: "600px",
                        height: "200px", // Resmin görünmesini istediğin yükseklik
                        objectFit: "cover", // Resmi kırparak uygun hale getirir
                        objectPosition: "bottom" // Alt kısmı sabit bırakır, üstü keser
                    }}
                />


                <ContentWrapper>
                    <h2>Position Absolute Acı Pizza</h2>
                    <p><strong>85.50₺</strong></p>

                    <Form onSubmit={handleSubmit}>
                        <Label>İsim *</Label>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                        {errors.name && <ErrorText>{errors.name}</ErrorText>} {/* Yeni Stil */}


                        <Label>Boyut Seç *</Label>
                        <RadioGroup>
                            {["Küçük", "Orta", "Büyük"].map((size) => (
                                <RadioLabel key={size}>
                                    <Input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        checked={formData.size === size}
                                        onChange={handleChange}
                                    />
                                    {size}
                                </RadioLabel>
                            ))}
                        </RadioGroup>
                        {errors.size && <ErrorText>{errors.size}</ErrorText>} {/* Yeni Stil */}

                        <Label>Hamur Seç *</Label>
                        <Select name="dough" value={formData.dough} onChange={handleChange}>
                            <option value="">Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </Select>
                        {errors.dough && <ErrorText>{errors.dough}</ErrorText>} {/* Yeni Stil */}


                        <Label>Ek Malzemeler (En az 4, Maks. 10)</Label>
                        <CheckboxGroup>
                            {toppingsList.map((topping) => (
                                <CheckboxLabel key={topping}>
                                    <div className="checkbox-wrapper">
                                        <Input
                                            type="checkbox"
                                            value={topping}
                                            checked={formData.toppings.includes(topping)}
                                            onChange={() => handleToppingsChange(topping)}
                                        />
                                    </div>
                                    <span>{topping}</span>
                                </CheckboxLabel>
                            ))}
                        </CheckboxGroup>
                        {errors.toppings && <ErrorText>{errors.toppings}</ErrorText>} {/* Yeni Stil */}

                        <Label>Adet</Label>
                        <QuantityBox>
                            <button type="button" onClick={() => handleQuantityChange("decrease")}>-</button>
                            <span>{formData.quantity}</span>
                            <button type="button" onClick={() => handleQuantityChange("increase")}>+</button>
                        </QuantityBox>

                        <SummaryBox>
                            <p><strong>Toplam:</strong> {(formData.price + formData.toppings.length * 5) * formData.quantity}₺</p>
                        </SummaryBox>

                        <Button type="submit" disabled={loading}>{loading ? "Sipariş Veriliyor..." : "Siparişi Ver"}</Button>
                    </Form>
                </ContentWrapper>
            </OrderContainer>
            <FooterComponent />
        </>
    );
};

export default OrderPizza;
