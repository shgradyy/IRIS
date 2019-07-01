//Get modal background
const modBackground = document.getElementById("modal-bg");

// Get  open modal button
const modalBtn = document.getElementById("btn");

//Close button
const closeBtn = document.getElementById("closeB");

//Listen for  open click
modalBtn.addEventListener("click", openModal);

//Listen for close click
closeBtn.addEventListener("click", closeModal);

//function to open modal
function openModal() {
  modBackground.style.display = "flex";
}

//function to close modal
function closeModal() {
  modBackground.style.display = "none";
}