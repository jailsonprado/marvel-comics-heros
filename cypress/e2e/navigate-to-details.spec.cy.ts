/// <reference types="cypress" />
describe('Should test click image and navigate', () => {
  it('should click image hero ', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');
    cy.get('[alt="image-hero"]').first().click();
  });

  it('should add hero to favorite list in page details', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="image-hero"]').first().click();

    cy.get('[alt="favorite logo add"]').first().click();

    cy.get('img[alt="favorite logo remove"]').should('exist');
  });

  it('should remove hero to favorite list in page details', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="image-hero"]').first().click();

    cy.get('[alt="favorite logo add"]').first().click();

    cy.get('[alt="favorite logo remove"]').first().click();

    cy.get('img[alt="favorite logo add"]').should('exist');
  });

  it('should click back button in page details', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="image-hero"]').first().click();

    cy.get('img[alt="favorite logo add"]').first().click();

    cy.get('span').contains('Voltar').should('exist');

    cy.get('span').contains('Voltar').click();
  });
});
