
describe("Profile Page Test Cases", () => {

    it("click on a person from home page and go to person page", () =>{
        cy.visit("/")
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 2)
        cy.get(".focused").type('{downarrow}') 
        cy.focused().click()
        cy.location('pathname').should('include', 'person')
    })

    it("On Person Page for the param id = 4, validate whether the name of the person is Darth Vader", () =>{
        cy.visit("/person/4")
        cy.get('.name').should('have.text', 'Darth Vader')
    })

    it("check if Back to Home Button on Person page redirects to Home Page", () =>{
        cy.visit("/person/4")
        cy.get('.name').should('have.text', 'Darth Vader')
        cy.get('.button').click()
        cy.location('pathname').should('not.include', 'person')
        cy.focused().should('have.class', 'focused')
    })
})