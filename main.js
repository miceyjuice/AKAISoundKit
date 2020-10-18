const soundPlayer = (e) => {

  const sound = document.querySelector("#" + e.code + " audio");

  if (sound) {
    sound.play();
    changeColor(`#${e.code}`);
  }

};

const changeColor = (id) => {
  document.querySelector(id).classList.add("changed");
  setTimeout(function () {
    document.querySelector(id).classList.remove("changed");
  }, 100);
};
document.body.addEventListener("keypress", soundPlayer);
