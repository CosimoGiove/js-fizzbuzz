"use strict"
// lista dell ul  che deve contenere li//
const ListaBuzzFizz = document.getElementById("lista");

//ciclo for da 1 a 100//
for (let conteggio = 1; conteggio <= 100; conteggio++) {
    //creazione elemento li//
    let ELemento = document.createElement("li")
     
    if (conteggio % 3 === 0 && conteggio % 5 === 0) {
        console.log("FizzBuzz");
        ELemento.append("FizzBuzz");
        ListaBuzzFizz.append(ELemento);
        ELemento.classList.add("color")
    } else if (conteggio % 3 === 0) {
        console.log("Fizz");
        ELemento.append("Fizz");
        ListaBuzzFizz.append(ELemento);
        ELemento.classList.add("green")
    } else if (conteggio % 5 === 0) {
        console.log("Buzz");
        ELemento.append("Buzz");
        ListaBuzzFizz.append(ELemento);
        ELemento.classList.add("yellow")
    } else {
        console.log(conteggio);
        ELemento.append(conteggio);
        ListaBuzzFizz.append(ELemento);
        ELemento.classList.add("blue")
    }
}






