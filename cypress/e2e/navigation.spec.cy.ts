/// <reference types="cypress" />

describe('FavoriteHero Component', () => {
  it('should toggle the favorite icon when clicked', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .first()
      .click();

    cy.get('[data-testid="only-favorite"]').within(() => {
      cy.get('[alt="favorito02-icon"]').should('exist');
      cy.get('[alt="favorito02-icon"]').click();
      cy.get('[alt="favorito01-icon"]').should('exist');
    });
  });
});
