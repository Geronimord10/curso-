class EdenSalas{
    getsalasblock(){
        return cy.get('[id^="salasparent_"]')
    }
    
    getSalasTitle() {
        return cy.get('[id^="salasParent_"] .desc-punto-venta span:nth-of-type(2)');
    }
    
    getSalasPuntoDeVenta() {
        return cy.get('[id^="salasParent_"] .desc-punto-venta');
    }
}

export default new EdenSalas();