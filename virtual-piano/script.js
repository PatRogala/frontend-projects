const white_keys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const black_keys = ['w', 'e', 't', 'y', 'u'];

document.addEventListener('keydown', function(event) {
  if (white_keys.includes(event.key)) {
    console.log(`The '${event.key}' key is pressed.`);
    const note = new Audio(`./white_keys/${event.key}.mp3`);
    note.play();
  } else if (black_keys.includes(event.key)) {
    console.log(`The '${event.key}' key is pressed.`);
    const note = new Audio(`./black_keys/${event.key}.mp3`);
    note.play();
  } else {
    console.log("Please press a valid key");
  }
});