export let leftState = false;
export let rightState = false;

$(document).keydown((e) => {
  if (e.code === "ShiftLeft") {
    leftState = true;
  } else if (e.code === "ShiftRight") {
    rightState = true;
  }
});

$(document).keyup((e) => {
  if (e.code === "ShiftLeft") {
    leftState = false;
  } else if (e.code === "ShiftRight") {
    rightState = false;
  }
});

export function reset() {
  leftState = false;
  rightState = false;
}

let leftSideKeys = [
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",

  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",

  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
];

let rightSideKeys = [
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",

  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",

  "KeyN",
  "KeyM",
];

export function isUsingOppositeShift(event) {
  if (!leftState && !rightState) return null;
  if (!rightSideKeys.includes(event.code) && !leftSideKeys.includes(event.code))
    return null;

  if (
    (leftState && rightSideKeys.includes(event.code)) ||
    (rightState && leftSideKeys.includes(event.code))
  ) {
    return true;
  } else {
    return false;
  }
}
