const audio = {
  background: {
    class: "audio__background",
    src: "background.mp3",
    loop: true,
  },
  win: {
    class: "audio__win",
    src: "win.mp3",
    loop: false,
  },
  cellLight: {
    class: "audio__cell_light",
    src: "cell-light.mp3",
    loop: false,
  },
  cellDark: {
    class: "audio__cell_dark",
    src: "cell-dark.mp3",
    loop: false,
  },
  cellCross: {
    class: "audio__cell_cross",
    src: "cell-cross.mp3",
    loop: false,
  },
};

const controlButtons = {
  reset: {
    class: "button__reset",
    text: "Replay",
  },
  save: {
    class: "button__save",
    text: "Save",
  },
  continue: {
    class: "button__continue",
    text: "Last",
  },
  newgame: {
    class: "button__newgame",
    text: "New game",
  },
};

const nonogramSizes = [5, 10, 15];

export { audio, controlButtons, nonogramSizes };

