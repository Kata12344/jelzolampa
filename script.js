window.addEventListener("load", init);

function Class(elem) {
    return document.getElementsByClassName(elem);
}

function init() {
    kattint()
    setTimeout(pirosLesz, 3000)
    setTimeout(pirosSargaLesz, 3000)
}

function kattint() {
    Class("gomb")[0].addEventListener("click", pirosLesz)
}

function pirosLesz() {
    Class("gomb")[0].style.backgroundColor = "red";
}
function pirosSargaLesz() {
    Class("gomb")[0].style.backgroundColor = "red";
    Class("gomb")[1].style.backgroundColor = "yellow";
}
function zoldLesz() {
    Class("gomb")[2].style.backgroundColor = "green";
}

