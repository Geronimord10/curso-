/// <reference types="cypress" />
const yvytuhome = require("../../page/yvytu/yvytuhome")

describe("tests sobre la pagina de yvytu", () => {
    beforeEach(() => {
        cy.visit("https://vientosdelaselva.com.ar/")
    })
    it("verificar barra de navegacion - iterar en los botones pildora", () => {

        const menu = ["LA RESERVA", " CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

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
    })

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
})
