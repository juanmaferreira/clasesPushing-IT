export class ToDoListPage {


    verificarAll() {
        cy.get('[data-cy="all"]').should("have.text", "All");
    }

    verificarCompleted() {
        cy.get('[data-cy="completed"]').should("have.text", "Completed");
    }

    verificarActive() {
        cy.get('[data-cy="active"]').should("have.text", "Active");
    }

    verificarRemoveAll() {
        cy.get('[data-cy="removeAll"]').should("have.text", "Remove all");
    }

    agregarSetTareas() {

        cy.get('#task').type('Lavar la ropa');
        cy.get('#sendTask').click();
        cy.contains('li', "Lavar la ropa", { timeout: 15000 });
        cy.get('li').should('have.length', 1);

        cy.get('#task').type('Cocinar');
        cy.get('#sendTask').click();
        cy.contains('li', "Cocinar", { timeout: 15000 });
        cy.get('li').should('have.length', 2);

        cy.get('#task').type('Ir al GYM');
        cy.get('#sendTask').click();
        cy.contains('li', "Ir al GYM", { timeout: 15000 });

        cy.get('li').should('have.length', 3);
    }
};