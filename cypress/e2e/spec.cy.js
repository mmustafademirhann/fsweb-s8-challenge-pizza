/// <reference types="cypress" />

describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("/order"); // Sipariş sayfasına git
  });

  it("İsme metin girilebiliyor", () => {
    cy.get('input[name="name"]').type("Ali Veli");
    cy.get('input[name="name"]').should("have.value", "Ali Veli");
  });

  it("Pizza boyutu seçilebiliyor (Radio Button)", () => {
    const sizes = ["Küçük", "Orta", "Büyük"];

    sizes.forEach((size) => {
      cy.get(`input[type="radio"][value="${size}"]`).check().should("be.checked");
    });
  });

  it("Hamur seçilebiliyor (Dropdown - Select)", () => {
    cy.get('select[name="dough"]')
      .select("İnce")
      .should("have.value", "İnce");

    cy.get('select[name="dough"]')
      .select("Orta")
      .should("have.value", "Orta");

    cy.get('select[name="dough"]')
      .select("Kalın")
      .should("have.value", "Kalın");
  });

  it("Birden fazla malzeme seçilebiliyor (Checkbox)", () => {
    const toppings = ["Pepperoni", "Mısır", "Sucuk", "Domates"];

    toppings.forEach((topping) => {
      cy.contains(topping)
        .parent() // Checkbox kapsayıcısını al
        .find('input[type="checkbox"]') // Checkbox'ı bul
        .check() // Seç
        .should("be.checked"); // Seçildiğini doğrula
    });
  });

  it("Form gönderildiğinde başarı mesajı görülmeli", () => {
    cy.get('input[name="name"]').type("Ali Veli");
    cy.get('input[type="radio"][value="Büyük"]').check();
    cy.get('select[name="dough"]').select("İnce");

    // En az 4 malzeme seç
    ["Pepperoni", "Mısır", "Sucuk", "Domates"].forEach((topping) => {
      cy.contains(topping).parent().find('input[type="checkbox"]').check();
    });

    cy.get("button[type=submit]").click();

    // Sipariş başarıyla alındı mı?
    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
  });
});
