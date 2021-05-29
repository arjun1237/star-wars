
describe("Home Page Test Cases", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("check if seach engine is focused element", () => {
        cy.focused().should("have.class", "focused")
    })

    it("type word: ar into searchbar and get 10 results", () => {
        const text = "ar"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 10)
    })

    it("type word: art into searchbar and get 2 results", () => {
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 2).and('contain', text)
    })

    it("type word: art into searchbar and get 0 results", () => {
        const text = "artha"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("not.have.length", 1)
    })

    it("on clicking the cross, the search bar must get cleared", () =>{
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".cross").click()
        cy.get(".focused").should("have.value", "")
    })

    it("on typing word: art and then clicking on down arrow, the focus must shift to the list starting from top", () =>{
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 2)
        cy.get(".focused").type('{downarrow}')
        cy.focused().first().contains("Vader")
    })

    it("DOWN ARROW: on typing word: art and then clicking on down arrow, the focus must shift to the list starting from top to bottom as down arrow key is pressed", () =>{
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 2)
        cy.get(".focused").type('{downarrow}')  // first arrow key down
        cy.focused().first().type('{downarrow}')  // second arrow key down
        cy.focused().first().contains("Maul")
        cy.focused().first().type('{downarrow}')  // third arrow key down
        cy.focused().first().contains("Vader")
    })

    it("UP ARROW: on typing word: art and then clicking on down arrow, the focus must shift to the list starting from top to bottom as up arrow key is pressed", () =>{
        const text = "art"
        cy.get(".focused").type(text).should("have.value", text)
        cy.get(".list").should("have.length", 2)
        cy.get(".focused").type('{uparrow}')   // first arrow key up
        cy.focused().first().type('{uparrow}')  // second arrow key up
        cy.focused().first().contains("Vader") 
        cy.focused().first().type('{uparrow}')  // third arrow key up
        cy.focused().first().contains("Maul")
    })
})