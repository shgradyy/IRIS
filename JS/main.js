// Get modal element
const modal = document.getElementById('modal-bg');

// Get  open modal Content
const modalBtn = document.getElementById("btn");

//Close button
const closeBtn = document.getElementById('closeB');

//Listen for click
modalBtn.addEventListener('click', openModal);

function openModal(){
    console.log('hey');
}



/*document.getElementById('btn').addEventListener("click", () => document.querySelector('.modal-background').getElementsByClassName.display = "flex");

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal-background').getElementsByClassName.display = "none";
})*/