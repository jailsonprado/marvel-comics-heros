describe('Pagination Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should navigate through pagination', () => {
    cy.get('[data-testid="pagination-2"]').click();

    cy.get('[data-testid="pagination-2"]').should(
      'have.attr',
      'active',
      'true',
    );
  });

  it('should click in previous button', () => {
    cy.get('[data-testid="pagination-2"]').click();

    cy.get('[data-testid="pagination-2"]').should(
      'have.attr',
      'active',
      'true',
    );
    cy.get('[data-testid="pagination-previous"]').click();
    cy.get('[data-testid="pagination-previous"]').should('not.exist');
  });

  it('should click in next button pagination', () => {
    cy.get('[data-testid="pagination-next"]').click();

    cy.get('[data-testid="pagination-2"]').should(
      'have.attr',
      'active',
      'true',
    );
  });
});
