import { moviesOne, moviesTwo, moviesThree } from './data.js'

const cardsContainerOne = document.getElementById('cards-section-one')
const cardsContainerTwo = document.getElementById('cards-section-two')
const cardsContainerThree = document.getElementById('cards-section-three')

moviesOne.forEach(movie => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
  <img class="card-img" src="${movie.url}" alt="${movie.title}">
  `
  cardsContainerOne.appendChild(card)
})

moviesTwo.forEach(movie => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
  <img class="card-img" src="${movie.url}" alt="${movie.title}">
  `
  cardsContainerTwo.appendChild(card)
})

moviesThree.forEach(movie => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
  <img class="card-img" src="${movie.url}" alt="${movie.title}">
  `
  cardsContainerThree.appendChild(card)
})
