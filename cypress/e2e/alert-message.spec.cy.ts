/// <reference types="cypress" />

describe('CardHero Component', () => {
  it('should display message after clicking on 5 items', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="favorite logo add"]').eq(0).click();
    cy.get('[alt="favorite logo add"]').eq(1).click();
    cy.get('[alt="favorite logo add"').eq(2).click();
    cy.get('[alt="favorite logo add"]').eq(3).click();
    cy.get('[alt="favorite logo add"]').eq(4).click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('exist');
  });

  it('should remove message after any card favorited', () => {
    cy.visit('https://marvel-comics-heros.vercel.app/');

    cy.get('[alt="favorite logo add"]').eq(0).click();
    cy.get('[alt="favorite logo add"]').eq(1).click();
    cy.get('[alt="favorite logo add"]').eq(2).click();
    cy.get('[alt="favorite logo add"]').eq(3).click();
    cy.get('[alt="favorite logo add"]').eq(4).click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('exist');

    cy.get('[alt="favorite logo remove"]').eq(0).click();

    cy.get('span')
      .contains('Máximo de 5 heróis favoritos atingidos!')
      .should('not.exist');
  });
});
