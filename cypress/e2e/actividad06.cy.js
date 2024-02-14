import { ToDoListPage } from "../support/pages/todoListPage";
import { LoginPage } from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    const todoListPage = new ToDoListPage();
    const loginPage = new LoginPage();
        
         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(Cypress.env().usuario)
            loginPage.escribirContraseña(Cypress.env().password)
            loginPage.clickLogIn();
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            todoListPage.verificarActive();
            todoListPage.verificarAll();
            todoListPage.verificarCompleted();
            todoListPage.verificarRemoveAll();  
          });
     });