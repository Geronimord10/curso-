/// <reference types="cypress" />
const edenHome2 = require("../../page/edenpage2")
const edenHeader2 = require("../../page/edenHeader2")

describe('test sobre la pagina eden entradas', () => {
    it("verificar subtitulos", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHome2.getsubTitles().first().should("contain.text", "BUSCAR EVENTO")
        edenHome2.getsubTitles().last().should("contain.text", "CALENDARIO DE EVENTO")
    });
  
    it('Verificar menu', () => {
        cy.visit("https://www.edenentradas.com.ar/");
        const menuBtN = ["HOME", "TODOS", "AGENDA DEL FINDE", "RECITALES","TEATROS", "CUARTETOS", "FESTIVALES", "SALAS"]
        
        menuBtN.forEach((txtbtn, $index) => {
            edenHeader2.getMenuButtons().eq($index).should("contain.text", txtbtn)
        })
    });

    it("verificar pagina de recitales", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader2.getMenuButtons().eq(3).should("contain.text", "RECITALES")
    })
})