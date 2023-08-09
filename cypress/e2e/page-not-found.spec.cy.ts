/// <reference types="cypress" />

describe('Page 404 not found', () => {
  it('should navigate to page 404', () => {
    cy.visit('http://localhost:8080/page');

    cy.get(
      'img[alt="dead pool surpreso"][src="/src/assets/dead-pool-2.png"]',
    ).should('exist');
    cy.get('h1').contains('404').should('exist');
    cy.get('h1').contains('Pagina não encontrada...').should('exist');
    cy.get('button').contains('Ir para Home').should('exist');

    cy.get('button').contains('Ir para Home').click();
    cy.url().should('eq', 'http://localhost:8080/');
  });
});
