const scoreList = async () => {
  const gameId = "games/UzywzfdgV3gYuNVGXIwX/scores/";
    const url =
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${gameId}`;
  const response = await fetch(url);
  const outcome = await response.json();
  const scoreItem = outcome.result;

  const board = document.getElementById('board');
 
    let results = '';
  scoreItem.map((item) => {
    results += `<li class='para-text'>${item.user}: ${item.score}</li>`;
    return results;
  });

  board.innerHTML += results;
}

module.exports = scoreList;