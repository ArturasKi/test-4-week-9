const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const h2All = document.querySelectorAll('h2');

function btnFunction() {
    let text1 = rand(1, 6);
    let text2 = rand(1, 6);
    document.getElementById("pirmash2").innerHTML = text1;
    document.getElementById("antrash2").innerHTML = text2;
    if (text1 === text2) {
        h2All.forEach(function(h2All) {
        h2All.style.color = 'red';});
    } else document.getElementById("pirmash2").style.color = 'black';
    document.getElementById("antrash2").style.color = 'black';
  }

const tusciasMasyvas = [];
let suma = 0;

for (let i = 0; i < 8; i++) {
    let skaicius = rand(1, 10);
    console.log(skaicius);
    tusciasMasyvas.push(skaicius);
    suma += skaicius;
}
console.log(tusciasMasyvas);

function btnFunction2() {
    document.getElementById("pirmash3").innerHTML = suma;
}

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
li1.innerHTML = africa[0];
li2.innerHTML = africa[1];
li3.innerHTML = africa[2];
li4.innerHTML = africa[3];
li5.innerHTML = africa[4];
li6.innerHTML = africa[5];
li7.innerHTML = africa[6];
document.getElementById('ulID').appendChild(li1);
document.getElementById('ulID').appendChild(li2);
document.getElementById('ulID').appendChild(li4);
document.getElementById('ulID').appendChild(li6);
document.getElementById('ulID').appendChild(li7);


const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');

const inp1 = document.getElementById('input1');
const inp2 = document.getElementById('input2');

btnPlus.addEventListener('click', () => {
    console.log('Plus');
    let sum = Number(inp1.value) + Number(inp2.value);
    document.getElementById("calc").innerHTML = `Suma = ${sum}`;
})

btnMinus.addEventListener('click', () => {
    console.log('Minus');
    let min = inp1.value - inp2.value;
    document.getElementById("calc").innerHTML = `Skirtumas = ${min}`;
})

const li11 = document.createElement('li');
const li22 = document.createElement('li');
const li33 = document.createElement('li');
const li44 = document.createElement('li');
const li55 = document.createElement('li');

li11.innerHTML = australia[0];
li22.innerHTML = australia[1];
li33.innerHTML = australia[2];
li44.innerHTML = australia[3];
li55.innerHTML = australia[4];

document.getElementById('ulID2').appendChild(li11);
document.getElementById('ulID2').appendChild(li22);
document.getElementById('ulID2').appendChild(li33);
document.getElementById('ulID2').appendChild(li44);
document.getElementById('ulID2').appendChild(li55);


// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)