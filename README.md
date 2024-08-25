# Movie List Selector

> Here is the [working version](https://mate-academy.github.io/vue_movies-list-selector/)

You are given `src/data/movies.json` and initial markup in the `src/App.vue`. Your task is to:

1. Render one `.card` per movie.
1. `PageTitle` in the sidebar should show `No movies selected` when there is no selected movies.
1. Each movie should have an `MovieSelect` button to select the movie.
1. Only 1 movie can be selected at a time;
1. Save a `selectedMovie` in the state.
1. Add the `has-background-grey` class to the `card` of the selected Movie.
1. Show the name of the selected movie in the `PageTitle`.
1. Show the `ClearButton` button before the `PageTitle` only when a movie is selected.
1. `ClearButton` should clear the selection when clicked.
1. Don't show `MovieSelect` button when a movie is selected.
1. Show the `MovieUnselect` button for the selected movie to clear the selection.
1. Keep all `data-cy` attributes to pass the tests.

## Instructions

- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_movies-list-js/) and add it to the PR description.
