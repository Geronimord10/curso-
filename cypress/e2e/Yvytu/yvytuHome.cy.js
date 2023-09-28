/// <reference types="cypress" />
const yvytuhome = require("../../page/yvytu/yvytuhome")

describe("tests sobre la pagina de yvytu", () => {
    beforeEach(() => {
        cy.visit("https://vientosdelaselva.com.ar/")
    })
    it("verificar barra de navegacion - iterar en los botones pildora", () => {

        const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

        yvytuhome.getMenuPillButton().each((boton, indice) => {
            cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
        });
    });

    it("verificar barra de navegacion - iterar en botones", () => {
        const menu = [
            "",
            "LA RESERVA",
            "CABAÑAS",
            "COMO LLEGAR",
            "CONTACTO",
            "DONÁ",
        ]

        yvytuhome.getMenuAllButton().each((boton, indice) => {
            if (indice != 0) {
                cy.wrap(boton).should("have.text", menu[indice])
            }
        })
    });

    it("verificar comportamiento del boton IR Arriba", () => {
        yvytuhome.getIrArribaButton().should("not.be.visible");
        yvytuhome.getIrArribaButton().should("contain.text", "Ir arriba")
        yvytuhome.getGenericSubtitle().contains("Conocé una historia mágica.").scrollIntoView();
        yvytuhome.getIrArribaButton().should("be.visible");
        yvytuhome.getIrArribaButton().click();

        yvytuhome.getMenuPillButton().each((boton, indice) => {
            cy.wrap(boton).should("be.visible");
        });
    });

    it("verificar boton de reservar", () => {
        yvytuhome.getGenericButton().contains("Reservar").should("have.attr", "href", "https://wa.me/5493757454400");
        yvytuhome.getGenericButton().contains("Reservar").should("have.attr", "target", "_blank");

        yvytuhome.getGenericButton().contains("Reservar").should("have.css",
            "Background",
            "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box")
    });

    it.only("Visual Tetsing de Yvytu usando Snapshoot", () => {
        cy.compareSnapshot("home-page");
    });
});
