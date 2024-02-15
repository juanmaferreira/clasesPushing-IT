import { ToDoListPage } from "../support/pages/todoListPage";

describe('Actividad complementaria 7', () => { 
    const todoListPage = new ToDoListPage();
    
     beforeEach("Actividad complementaria 7", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
        cy.contains('To Do List').click()
        cy.get('[data-cy="removeAll"]').should('be.visible').click();
        cy.get('li', {timeout: 10000}).should('not.exist');
    })

  	it("Deberia sacar una foto completa", () =>{
        todoListPage.agregarSetTareas();
        cy.screenshot({capture:"fullPage"});
	})
  
    it("Deberia sacar una foto a las tres tareas", () =>{
        todoListPage.agregarSetTareas();
        cy.xpath("/html/body/div[1]/div/div[2]/ul/div").screenshot("");
    })
 })