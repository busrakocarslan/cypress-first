describe("login test", () => {
  it("login", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="loginHeader"]').should("be.visible").contains("Recipe");
    cy.get('[data-test="loginName"]').should("be.visible").type("abc");
    cy.get('[data-test="loginPass"]').should("be.visible").type("abc");
    cy.get('[data-test="loginSubmit"]').should("be.visible").click();
    // bu kısımdan sonra login gerçekleştiğinden url kontrol etmek gerek
    cy.url().should("include", "home"); // benim urlimde / dan sonra home var mı diye soruyoruz. bu şekilde login sonucunuda test etmiş oluyoruz.
  });
});
// describe("login test", () => {
//   it("login", () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[data-test="loginHeader"]').should("be.visible").contains("Recipe");
//     cy.get('[data-test="loginName"]').should("be.visible").type("abc");
//     cy.get('[data-test="loginPass"]').should("be.visible").type("abc");
//     cy.get('[data-test="loginSubmit"]').should("be.visible").click();
//     // bu kısımdan sonra login gerçekleştiğinden url kontrol etmek gerek
//     cy.url().should("include", "home"); // benim urlimde / dan sonra home var mı diye soruyoruz. bu şekilde login sonucunuda test etmiş oluyoruz.
//   });
// });
