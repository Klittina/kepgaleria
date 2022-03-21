var kepektomb = [{
    kepEleresiut: "kepek/kepek/kep1.jpg",
    kepCim: "Első kép címe"
}, {
    kepEleresiut: "kepek/kepek/kep2.jpg",
    kepCim: "Második kép címe"
}, {
    kepEleresiut: "kepek/kepek/kep3.jpg",
    kepCim: "Harmadik kép címe"
}, {
    kepEleresiut: "kepek/kepek/kep4.jpg",
    kepCim: "Negyedik kép címe"
}, {
    kepEleresiut: "kepek/kepek/kep5.jpg",
    kepCim: "Ötödik kép címe"
}];

function ID(elem) {
    return document.getElementById(elem);
}
window.addEventListener("load", init, false);

function init() {
    var txt = "";
    for (let index = 0; index < kepektomb.length; index++) {
        txt = txt + "<div class='csakakepek'><img src='" + kepektomb[index].kepEleresiut + "' alt='" + kepektomb[index].kepCim + "'></div>";
    }
    console.log(txt);
    ID("kep").innerHTML = txt;


    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}
var aktKep = 0;

function balra() {
    aktKep--;
    if (aktKep < 0) {
        aktKep = kepektomb.length - 1;
    }
    megjelenit(aktKep);
}

function jobbra() {
    aktKep++;
    if (aktKep >= kepektomb.length) {
        aktKep = 0;
    }
    megjelenit(aktKep);
}


function megjelenit(index) {
    ID("fokep").src = kepektomb[index].kepEleresiut;
    ID("fokep").alt = kepektomb[index].kepCim;
}