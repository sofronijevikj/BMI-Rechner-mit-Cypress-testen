// Beispiel für Cypress-Test
describe('BMI Calculator', () => {
    it('calculates BMI correctly', () => {
        cy.visit('http://localhost:5500');

        cy.get('#weight').type('70');
        cy.get('#height').type('175');
        cy.get('#calculateButton').click();

        cy.get('#result').should('contain', 'Ihr BMI beträgt: 22.86');
    });
});