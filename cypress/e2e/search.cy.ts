/// <reference types="cypress" />

describe('Search Icon and Input', () => {
  it('should perform a search when the search icon is clicked', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[data-testid="icone-de-busca"]').should('exist');

    cy.get('[data-testid="search"]').type('Spider-Man');

    cy.get('[data-testid="search"]').should('have.value', 'Spider-Man');
  });
});
