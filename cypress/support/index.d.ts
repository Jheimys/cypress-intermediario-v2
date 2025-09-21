declare namespace Cypress {
  interface Chainable {
    login(user: string, pw: string): Chainable<void>;
  }
}
