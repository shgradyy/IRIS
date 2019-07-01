const aboutContent = {
  navigation: {
    "nav-item-1": "Home",
    "nav-item-2": "Features",
    "nav-item-3": "Our Team",
    "nav-item-4": "Our Company",
    "img-src": "img/iris-logoo.png"
  },

  header: {
    "img-src-1": "img/school-children2.png",
    "img-src-2": "img/computer.jpg",
    h2: "IRIS",
    p: "International Rural School Report",
    "h2-2": "Hello, World!",
    p2:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
  },

  team: {
    "devName-1": "Shantay Grady",
    "devName-2": "Benita Beamer",
    "img-src-1": "img/shantay.png",
    "img-src-2": "img/benitaa.png",
    "devTitle-1": "Full-Stack Web Developer",
    "devBio-1": "I am a teacher, developer, and writer.",
    "devBio-2": "I am armed with a desire and drive to suceed.",
    "devPhone-1": "252.917.4044",
    "devPhone-2": "708.831.3799"
  }
};
//navigation
let logo = document.getElementById("logo-pic");
logo.setAttribute("src", aboutContent.navigation["img-src"]);

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((element, i) => {
  element.textContent = Object.values(aboutContent.navigation)[i];
});

//header
let headerImg = document.getElementById("header-img");
headerImg.setAttribute("src", aboutContent.header["img-src-1"]);

const firstPhoto = document.querySelector(".first-photo h2"); //you want to select the element to manipulate vs a node list
firstPhoto.textContent = aboutContent.header.h2;

const firstPhotoP = document.querySelector(".first-photo p");
firstPhotoP.textContent = aboutContent.header.p;

let infoTopImg = document.getElementById("txt-img");
infoTopImg.setAttribute("src", aboutContent.header["img-src-2"]);

const infoTop = document.querySelector(".text-cnt h2"); //you want to select the element to manipulate vs a node list
infoTop.textContent = aboutContent.header["h2-2"];

const infoTopP = document.querySelector(".text-cnt p");
infoTopP.textContent = aboutContent.header["p2"];

//team cards
const devInfo = document.querySelectorAll(".team-bar h2");
devInfo[0].textContent = aboutContent.team["devName-1"];
devInfo[1].textContent = aboutContent.team["devName-2"];

let devImg = document.getElementById("shantay-img");
devImg.setAttribute("src", aboutContent.team["img-src-1"]);

let devImgTwo = document.getElementById("benita-img");
devImgTwo.setAttribute("src", aboutContent.team["img-src-2"]);

const devTitle = document.querySelectorAll(".card .dev-person h3");
devTitle[0].textContent = aboutContent.team["devTitle-1"];
devTitle[1].textContent = aboutContent.team["devTitle-1"];

const devBio = document.querySelectorAll(".card .dev-person h4");
devBio[0].textContent = aboutContent.team["devBio-1"];
devBio[1].textContent = aboutContent.team["devBio-2"];

const devPhone = document.querySelectorAll(".dev-person p");
devPhone[0].textContent = aboutContent.team["devPhone-1"];
devPhone[4].textContent = aboutContent.team["devPhone-2"];