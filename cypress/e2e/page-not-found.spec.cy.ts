/// <reference types="cypress" />

describe('Page 404 not found', () => {
  it('should navigate to page 404', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/page');

    cy.get('[alt="dead pool surpreso"]').should('exist');
    cy.get('h1').contains('404').should('exist');
    cy.get('h1').contains('Pagina não encontrada...').should('exist');
    cy.get('button').contains('Ir para Home').should('exist');

    cy.get('button').contains('Ir para Home').click();
    cy.url().should('eq', 'https://marvel-comics-heros.vercel.app/');
  });
});
