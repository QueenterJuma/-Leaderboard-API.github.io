import './style.css';
import {
  apiUrl,
  board,
  refreshBtn,
  form,
  nameInput,
  scoreInput,
  results,
} from './modules/variables.js';

const renderList = (scores) => {
  board.innerHTML = '';
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    board.appendChild(listItem);
  });
};

const getScores = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
const renderScores = () => {
  getScores().then((data) => renderList(data.result));
};

getScores();

const addScore = async () => {
  const name = nameInput.value;
  const score = scoreInput.value;
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  form.reset(data);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore().then(() => {
    results.style.visibility = 'visible';
    results.classList.add('view');
    setTimeout(() => {
      results.style.visibility = 'hidden';
      results.classList.remove('view');
    }, 2500);
  });
});

refreshBtn.addEventListener('click', renderScores);
renderScores();
