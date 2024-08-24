/* eslint-disable arrow-parens, curly */
const page = {
  title: () => cy.byDataCy('PageTitle'),
  clearButton: () => cy.byDataCy('ClearButton'),
  movies: () => cy.byDataCy('Movie'),

  assertMovieSelected: index => {
    page.movies().eq(index).should('have.class', 'has-background-dark');
  },

  assertSelectedMoviesCount: count => {
    cy.get('[data-cy="Movie"].has-background-dark').should(
      'have.length',
      count,
    );
  },
};

let failed = false;

Cypress.on('fail', e => {
  failed = true;
  throw e;
});

describe('Page', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.visit('/');
  });

  describe('by default', () => {
    it('should have a list with one item per movie', () => {
      page.movies().should('have.length', 5);
    });

    it('should have no selected movies', () => {
      page.assertSelectedMoviesCount(0);
    });

    it('should have correct styles for MovieSelect', () => {
      cy.get('[data-cy="MovieSelect"] .fa-minus').should('not.exist');
      cy.get('[data-cy="MovieSelect"] .fa-plus').should('have.length', 5);
    });

    it('should have title with no selected movie', () => {
      page.title().should('have.text', 'No movies selected');
    });

    it('should not have an "x" button in the title', () => {
      page.clearButton().should('not.exist');
    });
  });

  describe('after selecting a movie', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('MovieSelect').click();
    });

    it('should have only 1 highlighted movie', () => {
      page.assertSelectedMoviesCount(1);
    });

    it('should have the 3rd movie highlighted', () => {
      page.assertMovieSelected(2);
    });

    it('should show MovieUnselect for a selected movie', () => {
      page.movies().eq(2).byDataCy('MovieUnselect').should('exist');
    });

    it('should have only 1 MovieUnselect', () => {
      cy.byDataCy('MovieUnselect').should('have.length', 1);
    });

    it('should have correct style for the MovieUnselect', () => {
      cy.get('[data-cy="MovieUnselect"] .fa-minus').should('exist');
    });

    it('should not have MovieSelect for the selected movie', () => {
      page.movies().eq(2).byDataCy('MovieSelect').should('not.exist');
    });

    it('should have an MovieSelect for each not selected movies', () => {
      cy.byDataCy('MovieSelect').should('have.length', 4);
    });

    it('should have correct styles for MovieSelect', () => {
      cy.get('[data-cy="MovieSelect"] .fa-minus').should('not.exist');
      cy.get('[data-cy="MovieSelect"] .fa-plus').should('have.length', 4);
    });

    it('should have title with a selected movie', () => {
      page.title().should('have.text', 'The Day After Tomorrow');
    });

    it('should have an "x" button in the title', () => {
      page.clearButton().should('exist');
    });
  });

  describe('after selecting another movie', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('MovieSelect').click();
      page.movies().eq(1).byDataCy('MovieSelect').click();
    });

    it('should have only 1 highlighted movie', () => {
      page.assertSelectedMoviesCount(1);
    });

    it('should have the 2nd movie highlighted', () => {
      page.assertMovieSelected(1);
    });

    it('should show MovieUnselect for a selected movie', () => {
      page.movies().eq(1).byDataCy('MovieUnselect').should('exist');
    });

    it('should have only 1 MovieUnselect', () => {
      cy.byDataCy('MovieUnselect').should('have.length', 1);
    });

    it('should have correct style for the MovieUnselect', () => {
      cy.get('[data-cy="MovieUnselect"] .fa-minus').should('exist');
    });

    it('should not have MovieSelect for the selected movie', () => {
      page.movies().eq(1).byDataCy('MovieSelect').should('not.exist');
    });

    it('should have an MovieSelect for each not selected movies', () => {
      cy.byDataCy('MovieSelect').should('have.length', 4);
    });

    it('should have correct styles for MovieSelect', () => {
      cy.get('[data-cy="MovieSelect"] .fa-minus').should('not.exist');
      cy.get('[data-cy="MovieSelect"] .fa-plus').should('have.length', 4);
    });

    it('should have title with a selected movie', () => {
      page.title().should('have.text', 'Love Actually');
    });
  });

  describe('after "x" button click', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('MovieSelect').click();
      page.clearButton().click();
    });

    it('should have title with no selected movie', () => {
      page.title().should('have.text', 'No movies selected');
    });

    it('should not have "x" button', () => {
      page.clearButton().should('not.exist');
    });

    it('should not have selected movies', () => {
      page.assertSelectedMoviesCount(0);
    });

    it('should allow to select a movie', () => {
      page.movies().eq(3).byDataCy('MovieSelect').click();

      page.title().should('have.text', 'Rogue One');
      page.assertMovieSelected(3);
    });
  });

  describe('after MovieUnselect click', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('MovieSelect').click();
      cy.byDataCy('MovieUnselect').click();
    });

    it('should have title with no selected movie', () => {
      page.title().should('have.text', 'No movies selected');
    });

    it('should not have "x" button', () => {
      page.clearButton().should('not.exist');
    });

    it('should not have selected movies', () => {
      page.assertSelectedMoviesCount(0);
    });

    it('should allow to select a movie', () => {
      page.movies().eq(3).byDataCy('MovieSelect').click();

      page.title().should('have.text', 'Rogue One');
      page.assertMovieSelected(3);
    });
  });
});
