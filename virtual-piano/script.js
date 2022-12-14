const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];

document.addEventListener('keydown', function(event) {
  if (keys.includes(event.key)) {
    console.log(`The '${event.key}' key is pressed.`);
    const note = new Audio(`./white_keys/${event.key}.mp3`);
    note.play();
  } else {
    console.log("Please press a valid key");
  }
});