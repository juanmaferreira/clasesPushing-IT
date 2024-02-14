 describe('Actividad complementaria 5', () => {
  const timeout = 10000;
  beforeEach("Prcondiciones", () => {
    cy.visit('');
    cy.get("#registertoggle").dblclick()
    cy.get('#user').type('pushingit')
    cy.get('#pass').type('123456!')
    cy.get('#submitForm').click()
    cy.xpath("//a[text()='To Do List']").click();
    //cy.xpath(`//*[@id="removeAll"]`).click();
    
})

 /* beforeEach("Prcondiciones", () => {
      cy.visit('');
      cy.get("#registertoggle").dblclick()
      cy.get('#user').type('pushingit')
      cy.get('#pass').type('123456!')
      cy.get('#submitForm').click()
      cy.get(`[id*='user_pushingit']`).should('exist')
      cy.get('#waitslink').click()
      cy.get('button#wait').dblclick()
  })

  /*it("Deberia validad la primera espera", () => {
      // Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
      cy.get('button#wait').should('have.text', 'Cargando');
      cy.get('button#wait', { timeout: 10000 }).should('have.text', 'Button');

  })

  it("Deberia validad la primera espera", () => {
      // verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
      cy.get('[data-cy="colorChangeMessage"]', { timeout: 20000 }).should('have.text', 'Wait 5 more seconds')
  })

  it.only("Deberia validad la primera espera", () => {
      cy.get('[id="message"]', { timeout: 10000 }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS');
      cy.get('[id="message"]', { timeout: 5000 }).should('not.to.have.text', 'You have waited for ten seconds, CONGRATULATIONS').invoke('text').then(text => {
          expect(text).to.be.equal('You are a man of patience and have waited fifteen seconds')
      });
  });*/

  it("Agregar tarea y chequear exitencia & Eliminar tarea y chequear que no este", () =>{
	
    cy.get("input[id='task']", {timeout: 1500}).type("Lavar la ropa");
    cy.get("#sendTask").click(); // Agrego la tarea

    cy.get('li').first().find('p').should('have.text', 'Lavar la ropa'); //Chequeo que exista

    cy.get('p', { timeout: 11000 }).first().siblings("button").should("exist").click(); //Elimino la tarea

    cy.contains('Lavar la ropa', {timeout: 1500}).should('not.exist'); // Chequeo que no este
	})
});