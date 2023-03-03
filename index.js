// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const a = 22;
const b = 22;

if (a > b) {
  console.log(`${a} daugiau uz ${b}`);
} else if (a < b) {
  console.log(`${a} maziau uz ${b}`);
} else if (a === b) {
  console.log(`${a} yra lygus ${b}`);
}

console.log(`
------------

`);

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(`
------------

`);


// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log(`
------------

`);


// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)



for (let i = 0; i < 5; i++) {
  let randNum = Math.floor(Math.random() * 10) + 1;
  console.log(randNum);
}

console.log(`
------------

`);

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)


let randNum = Math.floor(Math.random() * 10) + 1;

while (true) {
  console.log(randNum);
  if (randNum === 5) break;
  randNum = Math.floor(Math.random() * 10) + 1;
}

console.log(`
------------

`);


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let randNum1 = Math.floor(Math.random() * 11) + 20;
const numArray = [...Array(randNum1)].map(() => Math.floor(Math.random() * (30 - 10 + 1) + 10))

console.log(numArray);

let maxNum = numArray[0]

for (let i = 1; i < numArray.length; i++) {
  if (maxNum < numArray[i]) {
    maxNum = numArray[i]
  }

}
console.log('Didiziaus skaicius', maxNum);

console.log(`
------------

`);


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const letterArr = [...Array(100)].map(() => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)])
console.log(letterArr)

const letterA = letterArr.filter(a => a === 'A').length
const letterB = letterArr.filter(a => a === 'B').length
const letterC = letterArr.filter(a => a === 'C').length
const letterD = letterArr.filter(a => a === 'D').length
console.log('A yra:', letterA, ' | B yra:', letterB, ' | C yra: ', letterC, ' | D yra: ', letterD);

console.log(`
------------

`)

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). 
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
  if (typeof (a) === 'number' && typeof (b) === 'number') {

    const numSum = a + b;
    return numSum % 2 !== 0 ? 'Suma nelygine' : numSum
  }

  if (Array.isArray(a) && Array.isArray(b)) {

    const arrSum = a.length + b.length
    return arrSum % 2 !== 0 ? 'Suma nelygine' : arrSum
  }

  return 'Abu kitamieji turi būti arba skaičiai arba masyvai';
}

console.log(lygineSuma(5, [4, 5, 6, 7]));

console.log(`
------------

`)


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(a) {
  if (typeof (a) !== 'number' && a < 2) {
    return `${a} yra nepirminis skaicius`
  }
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return `${a} yra nepirminis skaicius`
    }
  }

  return `${a} yra pirminis skaicius`

}

console.log(pirminisSkaicius(3));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(array) {
  const strArr = array.join('');

  return `(${strArr.slice(0, 3)}) ${strArr.slice(3, 6)}-${strArr.slice(6)}`
}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));