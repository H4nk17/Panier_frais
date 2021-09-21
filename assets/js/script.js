var boutonLegume = document.getElementById('legume');
var boutonFruit = document.getElementById('fruit');
var boutonConfiture = document.getElementById('confiture');
var boutonBoisson = document.getElementById('boisson');
var boutonAccueil = document.getElementById('accueil');



var sectionLegume = document.getElementById('legumesection');
var sectionFruit = document.getElementById('fruitsection');
var sectionConfiture = document.getElementById('confituresection');
var sectionBoisson = document.getElementById('boissonsection');
var sectionAccueil = document.getElementById('accueilsection');



function displayNone() {
    sectionLegume.style.display = "block";
    sectionFruit.style.display = "none";
    sectionConfiture.style.display = "none";
    sectionBoisson.style.display = "none";
};


boutonLegume.addEventListener('click', displayNone);


function displayNone2() {
    sectionLegume.style.display = "none";
    sectionConfiture.style.display = "none";
    sectionBoisson.style.display = "none";
    sectionFruit.style.display = "block";
};


boutonFruit.addEventListener('click', displayNone2);


function displayNone3() {
    sectionLegume.style.display = "none";
    sectionConfiture.style.display = "block";
    sectionBoisson.style.display = "none";
    sectionFruit.style.display = "none";
};


boutonConfiture.addEventListener('click', displayNone3);


function displayNone4() {
    sectionLegume.style.display = "none";
    sectionConfiture.style.display = "none";
    sectionBoisson.style.display = "block";
    sectionFruit.style.display = "none";
};


boutonBoisson.addEventListener('click', displayNone4);



function displayNone5() {
    sectionLegume.style.display = "none";
    sectionFruit.style.display = "none";
    sectionConfiture.style.display = "none";
    sectionBoisson.style.display = "none";
    sectionAccueil.style.display = "block";
};


boutonAccueil.addEventListener('click', displayNone5);