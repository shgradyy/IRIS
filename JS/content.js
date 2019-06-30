//navigation
const navigation = {
    "photobox": {
        "img-src": "img/iris-logoo.png",
        "alt": "IRIS Logo"
    },

    "navlinks": {
        "nav-item-1": "Home",
        "nav-item-2": "Features",
        "nav-item-3": "Our Team",
        "nav-item-4": "Our Company"
    }
}

let logo = document.getElementById('img-logo');
logo.setAttribute('src', navigation["photobox"]["img-src"]);
logo.setAttribute('alt', navigation["photobox"]["alt"]);
   

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((element, i) => {
  element.textContent = Object.values(navigation.navlinks)[i];
});

//review classList to see if it is what you need to use for nav links

//header
const header = {    
    "about": {
        "img-src": "img/computer.jpg",
        "alt": "Meeting Plan",
        "h2": "Hello, World!",
        "p": "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },

    "learn": {
        "img-src": "img/iris-logoo.png",
        "alt": "IRIS Logo"
    }
}
const txtCnt = document.querySelector('.text-cnt h2'); //you want to select the element to manipulate vs a node list
txtCnt.textContent = header.about["h2"];

const txtCntP = document.querySelector('.text-cnt p');
txtCntP.textContent = header.about["p"];

const imgCnt = document.querySelector('.img-cnt');
imgCnt.setAttribute('src', header.about["img-src"]);
imgCnt.setAttribute('alt', header.about["alt"]);