<script setup>
import { ref } from 'vue';
import movies from './data/movies.json';

const selectedMovie = ref(null);
</script>

<template>
  <!-- eslint-disable max-len -->
  <div class="page">
    <div class="page-content">
      <div class="movies">
        <div
          v-for="movie of movies"
          :key="movie.imdbId"
          data-cy="movie"
          class="card"
          :class="{
            'has-background-grey': selectedMovie?.imdbId === movie.imdbId,
          }"
        >
          <header class="card-header">
            <button
              v-if="selectedMovie?.imdbId === movie.imdbId"
              class="card-header-icon"
              data-cy="movie__unselect-button"
              @click="selectedMovie = null"
            >
              <span class="icon">
                <i class="fas fa-minus"></i>
              </span>
            </button>

            <button
              v-else
              class="card-header-icon"
              data-cy="movie__select-button"
              @click="selectedMovie = movie"
            >
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </header>

          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="movie__image"
                :src="movie.imgUrl"
                :alt="movie.title"
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
                <p class="title is-8" data-cy="movie__title">
                  {{ movie.title }}
                </p>
              </div>
            </div>

            <div class="content">
              <p data-cy="movie__description">{{ movie.description }}</p>
              <a :href="movie.imdbUrl" data-cy="movie__link">IMDB</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" data-cy="sidebar">
      <h2 class="subtitle">
        <button
          data-cy="clear-button"
          class="delete"
          v-if="selectedMovie"
          @click="selectedMovie = null"
        ></button>

        <span data-cy="page-title">
          {{ selectedMovie?.title || 'No movies selected' }}
        </span>
      </h2>
    </div>
  </div>
</template>
