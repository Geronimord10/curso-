class EdenHeader2{
    getMenuButtons(){
        return cy.get("#navbar a")
    }
}

export default new EdenHeader2();