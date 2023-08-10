class EdenHeader2 {
    getMenuButtons(){
        return cy.get("#navbar a")
    }

    getImagLogo() {
        return cy.get("#header-logo");
    }
}

export default new EdenHeader2();