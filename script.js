const button = document.getElementById("infoBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Welcome! JavaScript is working correctly.";
});
