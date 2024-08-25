/* eslint-disable arrow-parens, curly, max-len */
const page = {
  title: () => cy.byDataCy('page-title'),
  clearButton: () => cy.byDataCy('clear-button'),
  movies: () => cy.byDataCy('movie'),

  assertMovieSelected: index => {
    page.movies().eq(index).should('have.class', 'has-background-grey');
  },

  assertSelectedMoviesCount: count => {
    cy.get('[data-cy="movie"].has-background-grey').should(
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

    it('should have correct styles for movie__select-button', () => {
      cy.get('[data-cy="movie__select-button"] .fa-minus').should('not.exist');
      cy.get('[data-cy="movie__select-button"] .fa-plus').should(
        'have.length',
        5,
      );
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
      page.movies().eq(2).byDataCy('movie__select-button').click();
    });

    it('should have only 1 highlighted movie', () => {
      page.assertSelectedMoviesCount(1);
    });

    it('should have the 3rd movie highlighted', () => {
      page.assertMovieSelected(2);
    });

    it('should show movie__unselect-button for a selected movie', () => {
      page.movies().eq(2).byDataCy('movie__unselect-button').should('exist');
    });

    it('should have only 1 movie__unselect-button', () => {
      cy.byDataCy('movie__unselect-button').should('have.length', 1);
    });

    it('should have correct style for the movie__unselect-button', () => {
      cy.get('[data-cy="movie__unselect-button"] .fa-minus').should('exist');
    });

    it('should not have movie__select-button for the selected movie', () => {
      page.movies().eq(2).byDataCy('movie__select-button').should('not.exist');
    });

    it('should have an movie__select-button for each not selected movies', () => {
      cy.byDataCy('movie__select-button').should('have.length', 4);
    });

    it('should have correct styles for movie__select-button', () => {
      cy.get('[data-cy="movie__select-button"] .fa-minus').should('not.exist');
      cy.get('[data-cy="movie__select-button"] .fa-plus').should(
        'have.length',
        4,
      );
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
      page.movies().eq(2).byDataCy('movie__select-button').click();
      page.movies().eq(1).byDataCy('movie__select-button').click();
    });

    it('should have only 1 highlighted movie', () => {
      page.assertSelectedMoviesCount(1);
    });

    it('should have the 2nd movie highlighted', () => {
      page.assertMovieSelected(1);
    });

    it('should show movie__unselect-button for a selected movie', () => {
      page.movies().eq(1).byDataCy('movie__unselect-button').should('exist');
    });

    it('should have only 1 movie__unselect-button', () => {
      cy.byDataCy('movie__unselect-button').should('have.length', 1);
    });

    it('should have correct style for the movie__unselect-button', () => {
      cy.get('[data-cy="movie__unselect-button"] .fa-minus').should('exist');
    });

    it('should not have movie__select-button for the selected movie', () => {
      page.movies().eq(1).byDataCy('movie__select-button').should('not.exist');
    });

    it('should have an movie__select-button for each not selected movies', () => {
      cy.byDataCy('movie__select-button').should('have.length', 4);
    });

    it('should have correct styles for movie__select-button', () => {
      cy.get('[data-cy="movie__select-button"] .fa-minus').should('not.exist');
      cy.get('[data-cy="movie__select-button"] .fa-plus').should(
        'have.length',
        4,
      );
    });

    it('should have title with a selected movie', () => {
      page.title().should('have.text', 'Love Actually');
    });
  });

  describe('after "x" button click', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('movie__select-button').click();
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
      page.movies().eq(3).byDataCy('movie__select-button').click();

      page.title().should('have.text', 'Rogue One');
      page.assertMovieSelected(3);
    });
  });

  describe('after movie__unselect-button click', () => {
    beforeEach(() => {
      page.movies().eq(2).byDataCy('movie__select-button').click();
      cy.byDataCy('movie__unselect-button').click();
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
      page.movies().eq(3).byDataCy('movie__select-button').click();

      page.title().should('have.text', 'Rogue One');
      page.assertMovieSelected(3);
    });
  });
});
