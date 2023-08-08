/// <reference types="cypress" />

describe('CardHero Component', () => {
  it('should toggle the "add favorite" hero icon when clicked', () => {
    cy.visit('http://localhost:8080/');

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo remove"]').should('exist');
  });

  it('should toggle the "remove favorite" hero icon when clicked', () => {
    cy.visit('http://localhost:8080/');

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo remove"][src="/src/assets/favorito_01.svg"]')
      .first()
      .click();

    cy.get('img[alt="favorite logo add"]').should('exist');
  });
});
