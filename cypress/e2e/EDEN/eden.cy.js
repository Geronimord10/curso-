/// <reference types="cypress" />
import Edenpage from "../../page/edenpage"
import EdenHeader from "../../page/edenHeader";
const edenpage = new Edenpage();
const edenHeader = new EdenHeader();



describe('test sobre la pagina eden entradas', () => {
    it("verificar subtitulos", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        // constantes nuevas
        const txtBuscar = "BUSCAR EVENTO";
        const txtcalendar = "CALENDARIO DE EVENTO"

        edenpage.getsubTitles().first().should("contain.text", txtBuscar)
        edenpage.getsubTitles().last().should("contain.text", txtcalendar)
    });
  
    it('Verificar menu', () => {
        cy.visit("https://www.edenentradas.com.ar/");
        const menuBTN = ["HOME", "TODOS", "AGENDA DEL FINDE", "RECITALES","TEATROS", "CUARTETOS", "FESTIVALES", "SALAS"]

        edenHeader.getMenuButtons().each((button, $index) => {
            cy.wrap(button).should("be.visible", menuBTN[$index])
        })
    });

    it("verificar pagina de recitales", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getMenuButtons().contains("RECITALES").click();
    })
})