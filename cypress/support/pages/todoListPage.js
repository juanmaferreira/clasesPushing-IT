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
};