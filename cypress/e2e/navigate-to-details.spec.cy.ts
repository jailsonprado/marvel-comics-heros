/// <reference types="cypress" />
describe('Should test click image and navigate', () => {
  it('should click image hero ', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[alt="image-hero"]').first().click();
  });

  it('should add hero to favorite list in page details', () => {
    cy.visit('http://localhost:8080/');

    cy.get('[alt="image-hero"]').first().click();

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo remove"]').should('exist');
  });

  it('should remove hero to favorite list in page details', () => {
    cy.visit('http://localhost:8080/');

    cy.get('[alt="image-hero"]').first().click();

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo remove"][src="/src/assets/favorito_01.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo add"]').should('exist');
  });
});
