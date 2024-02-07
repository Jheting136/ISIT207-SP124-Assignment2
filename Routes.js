// navbarLinks.js

const homeLink = { text: "Home", url: "../Home/Home.html" };
const servicesLink = { text: "Services", url: "../Services/Services.html" };
const contactLink = { text: "Contact Us", url: "/contact" };

const routes = [ homeLink, servicesLink, contactLink ];
window.routes = routes;

function getCurrentRoute() {
  // Logic to determine the current route goes here
  const currentPath = window.location.pathname;
  return routes.find(route => route.path === currentPath) || null;
}

//set links by id
document.getElementById('homeLink').href = homeLink.url;
document.getElementById('homeLink').innerHTML = homeLink.text;

document.getElementById('servicesLink').innerText = servicesLink.text;
document.getElementById('servicesLink').href = servicesLink.url;

document.getElementById('contactLink').innerText = contactLink.text;
document.getElementById('contactLink').href = contactLink.url;

//set links by class
document.getElementsByClassName('homeLink').href = homeLink.url;
document.getElementsByClassName('homeLink').innerHTML = homeLink.text;

document.getElementsByClassName('servicesLink').innerText = servicesLink.text;
document.getElementsByClassName('servicesLink').href = servicesLink.url;

document.getElementsByClassName('contactLink').innerText = contactLink.text;
document.getElementsByClassName('contactLink').href = contactLink.url;