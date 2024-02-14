 describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria register', () =>{
        cy.visit('');
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('2');
        cy.get('#month').select('July');
        cy.get('#year').select('1998');
        cy.get('#submitForm').click();
      });

    it('Actividad complementeria login', () =>{
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(`pushingit`);
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
    });
});