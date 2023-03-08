const createGame = async () => {
  const gameTittle = {
    name: "new score keeping game",
  };
  const url =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(gameTittle),
    headers: { "Content-Type": "application/json" },
  });
  await response.json();
};
export default createGame;
