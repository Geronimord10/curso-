class Utils{
    /**
     * @method getCompleteDate
     * @returns {array} [Día, Mes, Año] - Ejemplo [2, "Agosto", 2023]
     */
    getCompleteDate =() => {
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
        
        cy.log(nombreMesActual)
        cy.log(anioActual)
        cy.log(diaActual)
        return[diaActual, nombreMesActual, anioActual]
    }
}

export default new Utils();