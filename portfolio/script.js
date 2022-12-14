document.getElementById("piano").addEventListener("click", function() {
    document.querySelector(".window").classList.add("active");
    document.getElementById("piano-modal").classList.add("active");
});

document.getElementById("flashcards").addEventListener("click", function() {
    document.querySelector(".window").classList.add("active");
    document.getElementById("flashcards-modal").classList.add("active");
});

// add event listener to close every button with the class "close-window"
const closeButtons = document.querySelectorAll(".close-window");
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        document.querySelector(".window").classList.remove("active");
        document.querySelector(".modal").classList.remove("active");
    });
}