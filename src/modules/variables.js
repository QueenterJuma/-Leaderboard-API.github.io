const gameID = 'UzywzfdgV3gYuNVGXIwX';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const board = document.querySelector('#board');
const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const results = document.querySelector('#results');

results.style.visibility = 'hidden';

export {
  gameID, apiUrl, board, refreshBtn, form, nameInput, scoreInput, results,
};
