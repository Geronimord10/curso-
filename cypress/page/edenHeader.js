/// <reference types="cypress" />

class EdenHeaderLocators {
    constructor(){
        this.menuButtons = "#navbar a "
    }
}   

export default class EdenHeader {
    constructor(){
        this.locators = new EdenHeaderLocators();
    }
    
    getMenuButtons(){
        return cy.get(this.locators.menuButtons)
    }
}