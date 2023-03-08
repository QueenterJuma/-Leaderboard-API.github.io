import Participant from './score.js';

const formItems = () => {
  const participantName = document.querySelector('.name');
  const participantScore = document.querySelector(".score");

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = participantName.value;
    const score = participantScore.value;
    const newParticipant = new Participant(name, score);
    newParticipant.saveScore(newParticipant);

    const x = document.getElementById("results");
    x.className = 'view';
    setTimeout(() => { x.className = x.className.replace('view', ''); }, 3000);
    participantName.value = '';
    participantScore.value = '';

  });
};

export default formItems;