/// <reference types="cypress" />
import Edenpage from "../../page/edenpage"
import EdenHeader from "../../page/edenHeader";
import edensalas from "../../page/edensalas";
import EdenEvent from "../../page/edenEvent";
const edenEvent = new EdenEvent();
const edenpage = new Edenpage();
const edenHeader = new EdenHeader();
const EdenSalas = new EdenSalas
//const utils = require("../../page/utils")


describe('test sobre la pagina eden entradas', () => {
    beforeEach(() => {
        cy.openweb("/")

    })
    it("verificar subtitulos", () => {
        // constantes nuevas
        const txtBuscar = "BUSCAR EVENTO";
        const txtcalendar = "CALENDARIO DE EVENTO"

        edenpage.getsubTitles().first().should("contain.text", txtBuscar)
        edenpage.getsubTitles().last().should("contain.text", txtcalendar)
    });

    it('Verificar menu', () => {
        const menuBTN = ["HOME", "TODOS", "AGENDA DEL FINDE", "RECITALES", "TEATROS", "CUARTETOS", "FESTIVALES", "SALAS"]

        edenHeader.getMenuButtons().each((button, $index) => {
            cy.wrap(button).should("be.visible", menuBTN[$index])
        })
    });

    it("verificar pagina de recitales", () => {
        edenHeader.getMenuButtons().contains("RECITALES").click();
    })

    it('jira-2012:Verificar SALAS', () => {
        //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
        edenHeader.getMenuButtons().contains("SALAS").click();
        const titulosSalas = [
            "Plaza de la Música",
            "Sala del Rey",
            "Refugio Guernica",
            "Captain Blue XL",
            "Teatro Cultural Cañada",
            "Sala Agustín Tosco - Luz y Fuerza - B° Centro",
            "Sala de las Américas",
            "Studio Theater",
            "Casa Babylon",
        ]
        // validacion de los titulos iterando por elemento
        edensalas.getsalasblock().each((block, $inx) => {
            cy.log(`itero en el elemento ${$inx}: ${block}`)
            cy.wrap(block).should("be.visible")
            edensalas.getSalasTitle().eq($inx).should("have.text", titulosSalas[$inx])
        });

        // validacion por array
        titulosSalas.forEach((titulo, $inx) => {
            edensalas.getsalasblock().eq($inx).should("contain.text", titulo)
            edensalas.getsalasblock().eq($inx).should("have.text", titulo)
        })

        edenHeader.getMenuButtons().each((button, $index) => {
            cy.wrap(button).should("be.visible", menuBTN[$index])
        })
    });

    it("Calendario", () => {
        const nombresMeses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth();
        const anioActual = fechaActual.getFullYear();
        const nombreMesActual = nombresMeses[mesActual];
        const diaActual = fechaActual.getDate();

        cy.log(nombreMesActual); // Por ejemplo, "Agosto"
        cy.log(anioActual); // Por ejemplo, "2023"
        cy.log(diaActual); // Por ejemplo, "4"
        edenpage.getCalendarTitle().should("contain.text", nombreMesActual);
        edenpage.getCalendarTitle().should("contain.text", anioActual);

        edenpage
            .getCalendar()
            .find("td")
            .each((cuadradoDia, $inx) => {
                if ($inx < diaActual) {
                    cy.wrap(cuadradoDia).should(
                        "have.class",
                        "ui-datepicker-unselectable ui-state-disabled"
                    );
                    cy.log(`El día ${$inx} es no seleccionable`);
                }
            });
        it("Validacion del calendario 2", () => {
            const [dia, mes, anio] = utils.getCompleteDate();

            edenpage.getCalendarTitle().should("contain.text", mes)
            edenpage.getCalendarTitle().should("contain.text", anio)

        });

        it.only("verificar pagina de FESTIVALES", () => {
            edenHeader.getMenuButtons().contains("FESTIVALES").click();
            edenpage.getCalendar().should("be.visible")

        })
    });
})