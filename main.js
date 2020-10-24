const recordTemplate = `Record<span class="record-dot"></span>`;
const stopTemplate = `Stop<span class="record-dot"></span>`;
let recordBtnPressed;
let isRecorded = false;
const channel = [];
let chosenChannel = 'channel1';

const resetChannel = () => {
  const resetChannelOne = document.querySelector('.first-channel-delete');
  const resetChannelTwo = document.querySelector('.second-channel-delete');
  const resetChannelThree = document.querySelector('.third-channel-delete');
  const resetChannelFour = document.querySelector('.fourth-channel-delete');

  resetChannelOne.addEventListener('click', () => {
    channel.map(() => {
        channel.splice(channel.findIndex(v => v.channelName == 'channel1'));
    })
  })
  resetChannelTwo.addEventListener('click', () => {
    channel.map(() => {
        channel.splice(channel.findIndex(v => v.channelName == 'channel2'));
    })
  })
  resetChannelThree.addEventListener('click', () => {
    channel.map(() => {
        channel.splice(channel.findIndex(v => v.channelName == 'channel3'));
    })
  })
  resetChannelFour.addEventListener('click', () => {
    channel.map(() => {
        channel.splice(channel.findIndex(v => v.channelName == 'channel4'));
    })
  })

}

const startChannelOne = () => {
  const playButton = document.querySelector('.first-channel-play');

  playButton.addEventListener('click', () => {
    channel.map(value => {
      if(value.channelName == 'channel1'){
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    })
  })
}
const startChannelTwo = () => {
  const playButton = document.querySelector('.second-channel-play');

  playButton.addEventListener('click', () => {
    channel.map(value => {
      if(value.channelName == 'channel2'){
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    })
  })
}
const startChannelThree = () => {
  const playButton = document.querySelector('.third-channel-play');

  playButton.addEventListener('click', () => {
    channel.map(value => {
      if(value.channelName == 'channel3'){
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    })
  })
}
const startChannelFour = () => {
  const playButton = document.querySelector('.fourth-channel-play');

  playButton.addEventListener('click', () => {
    channel.map(value => {
      if(value.channelName == 'channel4'){
        let newAudio = new Audio(`./assets/audio/${value.trackName}`);
        setTimeout(() => {
          newAudio.play();
        }, value.timeStamp);
      }
    })
  })
}

const changeChannel = () => {
  const select = document.querySelector('#channels');

  select.addEventListener('change', (e) => {
    //console.log(e);
    //console.log(select.value);
    chosenChannel = select.value;
  })
}

const recording = () => {
  const recordBtn = document.querySelector('.record-button');
  
  recordBtn.addEventListener('click', e => {
    if(recordBtn.childNodes[0].data.trim() == `Record`){
      recordBtn.innerHTML = stopTemplate;
      isRecorded = true;
    }else{
      recordBtn.innerHTML = recordTemplate;
      isRecorded = false;
    }
    recordBtnPressed = Date.now();
  })
}

const soundPlayer = (e) => {
  const sound = document.querySelector("#" + e.code + " audio");

  if (sound) {
    sound.play();
    if(isRecorded){
      let src = sound.src;
      src = src.split(`/`);
      src = src[src.length-1]
      if(chosenChannel)
      channel.push({
        channelName: chosenChannel.toString(),
        trackName: src,
        timeStamp: Date.now() - recordBtnPressed
      })
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