const soundPlayer = (e) => {
  let sound;
  switch (e.code) {
    case "Numpad9":
      sound = document.querySelector("#clap");
      changeColor("#num9");
      break;
    case "Numpad8":
      sound = document.querySelector("#clap2");
      changeColor("#num8");
      break;
    case "Numpad7":
      sound = document.querySelector("#drum1");
      changeColor("#num7");
      break;
    case "Numpad6":
      sound = document.querySelector("#drum2");
      changeColor("#num6");
      break;
    case "Numpad5":
      sound = document.querySelector("#kick1");
      changeColor("#num5");
      break;
    case "Numpad4":
      sound = document.querySelector("#kick2");
      changeColor("#num4");
      break;
    case "Numpad3":
      sound = document.querySelector("#knock");
      changeColor("#num3");
      break;
    case "Numpad2":
      sound = document.querySelector("#snare");
      changeColor("#num2");
      break;
    case "Numpad1":
      sound = document.querySelector("#tink");
      changeColor("#num1");
      break;
  }

  if (sound) {
    sound.play();
  }

  //   if (e.code === "NUM9") {
  //     document.querySelector("#num9 audio").play();
  //   }
};

const changeColor = (id) => {
  document.querySelector(id).classList.add("changed");
  setTimeout(function () {
    document.querySelector(id).classList.remove("changed");
  }, 100);
};
document.body.addEventListener("keypress", soundPlayer);
