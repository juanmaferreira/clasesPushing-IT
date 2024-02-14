describe('Actividad complementaria 2', () => {

    //Modificar todos los elementos web para que el test haga lo mismo pero encontrando los
    //elementos web de una manera diferente
    
        it('Registrarse en pushing it', () => {
            const numeroRandom = Math.floor(Math.random() * 1000)
            cy.visit('');
            cy.get('input').first().type(`pushingiT${numeroRandom}`); //
            cy.get("input[id='pass']").type('123456!')
            cy.get('[value="Male"]').check({ force: true })
            cy.get("select[id='day']").select('9') ///
            cy.get('select#month').select('June') ///
            cy.get("select[id='year']").select(11); ///
            cy.contains('button', 'Register').click(); ////
        });
    });