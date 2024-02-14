describe("Desafios", () => {
    const numero = Math.floor(Math.random() * 1000)
    it('Desafio 1', () => {
        const numeroRandom = Math.floor(Math.random() * 1000)
        const tarea = "Comprar zanahoria";
            cy.visit('');
            //Registro
            cy.get('input').first().type(`pushingiT${numeroRandom}`);
            cy.get("input[id='pass']").type('123456!');
            cy.get('[value="Male"]').check({ force: true });
            cy.get("select[id='day']").select('9');
            cy.get('select#month').select('June');
            cy.get("select[id='year']").select(11); 
            cy.contains('button', 'Register').click();

            cy.get("a[id='todolistlink']").click();
            cy.get('input').type(`${tarea}`);
            cy.contains('button', 'Send').click();
            cy.wait(500);
            cy.contains(`${tarea}`).click();
    });
});