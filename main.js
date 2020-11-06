const recordTemplate = `Record<span class="record-dot"></span>`;
const stopTemplate = `Stop recording`;
let recordBtnPressed;
let isRecorded = false;
let channel = [];
let chosenChannel = "channel1";

const resetAllChannels = () => {
  const resetBtn = document.querySelector(".reset-all");

  resetBtn.addEventListener("click", () => {
    channel = [];
  });
};

const resetChannel = () => {
  const resetChannelOne = document.querySelector(".first-channel-delete");
  const resetChannelTwo = document.querySelector(".second-channel-delete");
  const resetChannelThree = document.querySelector(".third-channel-delete");
  const resetChannelFour = document.querySelector(".fourth-channel-delete");

  resetChannelOne.addEventListener("click", () => {
    channel.map(() => {
      channel.splice(channel.findIndex((v) => v.channelName == "channel1"));
    });
  });
  resetChannelTwo.addEventListener("click", () => {
    channel.map(() => {
      channel.splice(channel.findIndex((v) => v.channelName == "channel2"));
    });
  });
  resetChannelThree.addEventListener("click", () => {
    channel.map(() => {
      channel.splice(channel.findIndex((v) => v.channelName == "channel3"));
    });
  });
  resetChannelFour.addEventListener("click", () => {
    channel.map(() => {
      channel.splice(channel.findIndex((v) => v.channelName == "channel4"));
    });
  });
};

const startAllChannels = () => {
  const playAllBtn = document.querySelector(".play-all");

  playAllBtn.addEventListener("click", () => {
    channel.map((value) => {
      let allSounds = new Audio(`./assets/audio/${value.trackName}`);
      if (!allSounds) {
        alert("There is no recorded sound!");
      } else {
        setTimeout(() => {
          allSounds.play();
        }, value.timeStamp);
      }
    });
  });
};

const startChannelOne = () => {
  const playButton = document.querySelector(".first-channel-play");

  playButton.addEventListener("click", () => {
    channel.map((value) => {
      if (value.channelName == "channel1") {
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    });
  });
};
const startChannelTwo = () => {
  const playButton = document.querySelector(".second-channel-play");

  playButton.addEventListener("click", () => {
    channel.map((value) => {
      if (value.channelName == "channel2") {
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    });
  });
};
const startChannelThree = () => {
  const playButton = document.querySelector(".third-channel-play");

  playButton.addEventListener("click", () => {
    channel.map((value) => {
      if (value.channelName == "channel3") {
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    });
  });
};
const startChannelFour = () => {
  const playButton = document.querySelector(".fourth-channel-play");

  playButton.addEventListener("click", () => {
    channel.map((value) => {
      if (value.channelName == "channel4") {
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    });
  });
};

// Wybór kanału do nagrania

const changeChannel = () => {
  const select = document.querySelector("#channels");

  select.addEventListener("change", (e) => {
    chosenChannel = select.value;
  });
};

// Manipulacja przyciskiem do nagrywania

const recording = () => {
  const recordBtn = document.querySelector(".record-button");

  recordBtn.addEventListener("click", (e) => {
    if (recordBtn.childNodes[0].data.trim() == `Record`) {
      recordBtn.innerHTML = stopTemplate;
      recordBtn.style.backgroundColor = "#d85449";
      recordBtn.style.color = "#fff";
      recordBtn.style.transition = "0.2s ease-in-out";

      isRecorded = true;
    } else {
      recordBtn.innerHTML = recordTemplate;
      recordBtn.style.backgroundColor = "#fff";
      recordBtn.style.color = "#000";

      isRecorded = false;
    }
    recordBtnPressed = Date.now();
  });
};

// Dodawanie odtwarzanego dźwięku do tablicy

const soundPlayer = (e) => {
  const sound = document.querySelector("#" + e.code + " audio");

  if (sound) {
    sound.play();
    if (isRecorded) {
      let src = sound.src;
      src = src.split(`/`);
      src = src[src.length - 1];
      if (chosenChannel)
        channel.push({
          channelName: chosenChannel.toString(),
          trackName: src,
          timeStamp: Date.now() - recordBtnPressed,
        });
    }
    //console.log(channel);
    changeColor(`#${e.code}`);
  }
};

const changeColor = (id) => {
  document.querySelector(id).classList.add("changed");
  setTimeout(function () {
    document.querySelector(id).classList.remove("changed");
  }, 200);
};

document.body.addEventListener("keypress", soundPlayer);
recording();
changeChannel();
startChannelOne();
startChannelTwo();
startChannelThree();
startChannelFour();
resetChannel();
resetAllChannels();
startAllChannels();
