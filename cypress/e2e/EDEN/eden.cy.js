/// <reference types="cypress" />
import Edenpage from "../../page/edenpage"
import EdenHeader from "../../page/edenHeader";
import edensalas from "../../page/edensalas";
const edenpage = new Edenpage();
const edenHeader = new EdenHeader();
const EdenSalas = new EdenSalas



describe('test sobre la pagina eden entradas', () => {
    beforeEach(() =>{
        cy.visit("https://www.edenentradas.com.ar/");
    });
    afterEach(() => {
        // func para desloguearse
    })
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
    
    it('jira-2012:Verificar SALAS', () => {
        //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
        cy.visit("https://www.edenentradas.com.ar/")
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

        it("Validacion del calendario", () => {
            cy.visit("https://www.edenentradas.com.ar/");
            edenHeader.getCalendarTitle().should("contain.text", "Agosto")
        });
    });
})