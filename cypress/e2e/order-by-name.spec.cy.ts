/// <reference types="cypress" />

describe('Order By Name ', () => {
  it('should click in toogle icon for order by heros Z/A', () => {
    cy.visit('http://localhost:8080/');

    cy.get('[alt="toggle-off-icon"]').should('exist');
    cy.get('[alt="toggle-off-icon"]').click();
    cy.get('[alt="toggle-on-icon"]').should('exist');
  });

  it('should click in toogle icon for order by heros A/Z', () => {
    cy.visit('http://localhost:8080/');

    cy.get('[alt="toggle-off-icon"]').should('exist');
    cy.get('[alt="toggle-off-icon"]').click();
    cy.get('[alt="toggle-on-icon"]').should('exist');
    cy.get('[alt="toggle-on-icon"]').click();
    cy.get('[alt="toggle-off-icon"]').should('exist');
  });
});
