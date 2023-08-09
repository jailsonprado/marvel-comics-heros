/// <reference types="cypress" />

describe('CardHero Component', () => {
  it('should toggle the "add favorite" hero icon when clicked', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="favorite logo add"]').first().click();

    cy.get('img[alt="favorite logo remove"]').should('exist');
  });

  it('should toggle the "remove favorite" hero icon when clicked', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="favorite logo add"]').first().click();

    cy.get('[alt="favorite logo remove"]').first().click();

    cy.get('img[alt="favorite logo add"]').should('exist');
  });
});
