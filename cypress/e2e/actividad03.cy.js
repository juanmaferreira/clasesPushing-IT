

describe("Actividad complementaria 3", () =>{

    it('Actividad complementaria 3', () =>{
        const tarea = "tarea 1";
        cy.visit('');

        cy.xpath('/html/body/div[1]/div/div/div/form/p/span').dblclick()

        cy.xpath("//input[@id='user']").type(`pushingit`);
        cy.xpath("//input[contains(@class, 'password')]").type('123456!');
        cy.xpath("//button[text()='Log in']").click();

        cy.xpath("//a[text()='To Do List']").click();
        cy.xpath("//input[@id='task']").type(`${tarea}`);
        cy.xpath("//button[text()='Send']").click();
        cy.xpath(`//p[text()='${tarea}']`).click();
    });
});
