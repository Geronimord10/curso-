/// <reference types="cypress" />
const yvytuhome = require("../../page/yvytu/yvytuhome")

describe("tests sobre la pagina de yvytu", () => {
    it("verificar barra de navegacion - iterar en los botones pildora", () => {
        cy.visit("https://vientosdelaselva.com.ar/")

        const menu = ["LA RESERVA", " CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

        yvytuhome.getMenuPillButton().each((boton, indice) => {
            cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
        });
    });

    it("verificar barra de navegacion - iterar en botones", () => {
        cy.visit("https://vientosdelaselva.com.ar/")

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


})
