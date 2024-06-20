describe("home test", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
        cy.viewport(1200,1200)// ekran boyutu için. Cypress config dosyasında da bu değişiklik yapılabilir.
    })
    it("home", () => {
      cy.login();// commands dosyasında oluşturdupumuz login kodlarını kullanıyoruz. 
      cy.get('[data-test="homeAbout"]').contains("About").should('be.visible').click({force:true})
      cy.url().should('include','/about')// about sayfasına gittiği için url i de kontrol ediyoruz.
      cy.get('[data-test="homeLogo"]').contains("Clarusway").should('be.visible').click({force:true})// ana sayfaya gitme       
      cy.url().should("include", "/home"); //url kontrolü
      cy.get("[data-test='recipeHeader']").contains("Welcome to my").should("be.visible")
      cy.get("[data-test='recipeSubHeader']").contains("Food App").should("be.visible")
      cy.get("[data-test='homeSearch']").type("soup")//input alanı
      cy.get("[data-test='homeSearchBtn']").click({ force: true });//input search
      cy.get("[data-test='cardHeader']").should("be.visible")
      cy.get("[data-test='cardImage']").should("be.visible")
      cy.get("[data-test='cardBtn']").should("be.visible").first().click({ force: true });// çıkan kartlar arasında ilkini kontrol ediyor yoksa butonu kontrol edemiyor last da olabilir children da olabilir dökumana bak
      cy.url().should("include", "/details")// ilk cardın urlini kontrol ediyor
    
    });
  });
  