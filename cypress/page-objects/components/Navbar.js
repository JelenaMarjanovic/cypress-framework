export default class Navbar {
  static clickOnLogo() {
    cy.get('.brand').click();
  }

  static search(term) {
    cy.get('#searchTerm').type(`${term} {enter}`);
  }

  static clickSignIn() {
    cy.get('#signin_button').click();
  }
}
