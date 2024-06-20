describe('recipe project detail', () => {
    beforeEach(() => {   
    cy.visit('http://localhost:3000/')
    cy.viewport(1200, 1200);
    })
   
    it('details', () => {
    cy.login()// commands dosyasından hazır alınan
    cy.home()// commands dosyasından hazır alınan
    cy.get("[data-test='contentHeader']").should("be.visible")
    cy.get("[data-test='contentParag']"). should("be.visible") 
    cy.get("[data-test='contentCal']").should("be.visible")
    cy.get("[data-test='contentImage']").should("be.visible")
    cy.get('[data-test="Fattest"]').should("be.visible") // BURAdaki Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını incele ordaki map den geliyor
    cy.get("[data-test='Carbstest']").should("be.visible") // BURADDAAKİ Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını incele oradaki map den geliyor
    })
    })