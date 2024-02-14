//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

describe('Actividad complementaria 4', () => {
    let datos;
    before("",() =>{
        cy.fixture("actividad04Datos").then(fixtureData => {
            datos = fixtureData;
        })
    })

    beforeEach('', () =>  {
        cy.visit('');
        cy.xpath('/html/body/div[1]/div/div/div/form/p/span').dblclick()
    })
    

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datos.username);
        cy.get('#pass').type(datos.pasword); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datos.errorM);
    });
});