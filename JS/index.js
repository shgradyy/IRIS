//Second Button Index page

// Get  open modal button
const modalBtn2 = document.getElementById("btn2");

//Close button
const closeBtn2 = document.getElementById("closeB");

//Listen for  open click
modalBtn2.addEventListener("click", openModal2);

//Listen for close click
closeBtn2.addEventListener("click", closeModal2);

//function to open modal
function openModal2() {
  modBackground.style.display = "flex";
}

//function to close modal
function closeModal2() {
  modBackground.style.display = "none";
}