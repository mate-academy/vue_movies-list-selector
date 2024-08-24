<script setup>
// import movies from './data/movies.json';
</script>

<template>
  <!-- eslint-disable max-len -->
  <div class="page">
    <div class="page-content">
      <div class="movies">
        <div class="card has-background-grey" data-cy="Movie">
          <header class="card-header">
            <button class="card-header-icon" data-cy="MovieUnselect">
              <span class="icon">
                <i class="fas fa-minus"></i>
              </span>
            </button>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Inception"
              />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-8" data-cy="MovieTitle">Inception</p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">
                Follows the lives of eight very different couples in dealing
                with their love lives in various loosely interrelated tales all
                set during a frantic month before Christmas in London, England.
              </p>

              <a
                href="https://www.imdb.com/title/tt1375666"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>

        <div class="card" data-cy="Movie">
          <header class="card-header">
            <button class="card-header-icon" data-cy="MovieSelect">
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
                alt="Love Actually"
              />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-8" data-cy="MovieTitle">Love Actually</p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O.
              </p>

              <a
                href="https://www.imdb.com/title/tt0314331"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>

        <div class="card" data-cy="Movie">
          <header class="card-header">
            <button class="card-header-icon" data-cy="MovieSelect">
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg"
                alt="The Day After Tomorrow"
              />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-8" data-cy="MovieTitle">
                  The Day After Tomorrow
                </p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">
                Jack Hall, paleoclimatologist, must make a daring trek from
                Washington, D.C. to New York City to reach his son, trapped in
                the cross-hairs of a sudden international storm which plunges
                the planet into a new Ice Age.
              </p>

              <a
                href="https://www.imdb.com/title/tt0319262"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" data-cy="Sidebar">
      <h2 class="subtitle">
        <button data-cy="ClearButton" class="delete"></button>
        <span data-cy="PageTitle">Inception</span>
      </h2>
    </div>
  </div>
</template>
