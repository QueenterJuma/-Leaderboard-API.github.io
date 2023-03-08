class Participant {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  saveScore = async (participantObj) => {
    const gameId = "games/UzywzfdgV3gYuNVGXIwX/scores/";
    const url =
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/${gameId}`;
    const result = await fetch(url, {
      method: "post",
      body: JSON.stringify(participantObj),
      headers: { "Content-Type": "application/json" },
    });
    await result.json();
  };
}

export default Participant;