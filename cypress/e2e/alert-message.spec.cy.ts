/// <reference types="cypress" />

describe('CardHero Component', () => {
  it('should display message after clicking on 5 items', () => {
    cy.visit('http://localhost:8080/');

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(0)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(1)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(2)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(3)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(4)
      .click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('exist');
  });

  it('should remove message after any card favorited', () => {
    cy.visit('http://localhost:8080/');

    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(0)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(1)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(2)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(3)
      .click();
    cy.get('img[alt="favorite logo add"][src="/src/assets/favorito_02.svg"]')
      .eq(4)
      .click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('exist');

    cy.get('img[alt="favorite logo remove"][src="/src/assets/favorito_01.svg"]')
      .eq(0)
      .click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('not.exist');
  });
});
