const btnReset = () => {
  const restore = document.querySelector(".refresh-btn");
  restore.addEventListener('click', () => {
    location.reload();
  });
};

export default btnReset;
