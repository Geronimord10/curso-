/// <reference types="cypress" />
const edenpage2 = require("../../page/edenpage2")
const edenHeader2 = require("../../page/edenHeader2")

describe('test sobre la pagina eden entradas', () => {
    it("verificar subtitulos", () => {
        cy.visit("https://www.edenentradas.com.ar/");

        const txtBuscar = "BUSCAR EVENTO";
        const txtCalendar = " CALENDARIO DE EVENTOS";
        edenpage2.getsubTitles().first().should("contain.text", txtBuscar)
        edenpage2.getsubTitles().last().should("contain.text", txtCalendar)
    });

    it('Verificar menu', () => {
        cy.visit("/");

        const menuBtN = ["HOME", "TODOS", "AGENDA DEL FINDE", "RECITALES", "TEATROS", "CUARTETOS", "FESTIVALES", "SALAS"]
        menuBtN.forEach((txtbtn, $index) => {
            edenHeader2.getMenuButtons().eq($index).should("contain.text", txtbtn)
        })
    });

    it("verificar pagina de recitales", () => {
        cy.visit("/");
        edenHeader2.getMenuButtons().eq(3).click();
    })

    it("LOGO", () => {
        cy.visit("/");

        const imgSrc = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
        edenHeader2.getImgLogo().should("have.attr", "src", imgSrc);
        edenHeader2.getImgLogo().should("have.attr", "alt", "EdenEntradas");

    })
})