const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];

document.addEventListener('keydown', function(event) {
  if (keys.includes(event.key)) {
    console.log(`The '${event.key}' key is pressed.`);
  } else {
    console.log("Please press a valid key");
  }
});