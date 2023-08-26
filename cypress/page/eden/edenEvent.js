/// <reference types="cypress" />

class EdenEventLocators {
    constructor() {
        this.evenTitle = ".fechas-funciones span";
    }
}

export default class EdenEvent {
    constructor() {
        this.locators = new EdenEventLocators();
    }

    getEventTitle() {
        return cy.get(this.locators.evenTitle).first()
    }
}