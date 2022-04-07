console.log("Starting Javascript");

let myName = "Lina";
console.log(myName);

let age = 34;
console.log(age);

let juliaAge = 32;
let ageDiff = age - juliaAge;
console.log(ageDiff);

if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

if (age === juliaAge) {
  console.log("You have the same age as Julia");
} else if (age > 21) {
  console.log("Julia is younger than you");
} else console.log("Julia is older than you");

let rosegoldQuokkas = [
  "Raúl",
  "Ottavia",
  "Jess",
  "Arno",
  "John",
  "Karolina",
  "Lina",
  "Marta",
  "Ale",
];

rosegoldQuokkas.sort();
console.log(rosegoldQuokkas[0]);
console.log(rosegoldQuokkas[8]);

for (let i = 0; i < 9; i++) {
  console.log(rosegoldQuokkas[i]);
}

let quokkasAge = [44, 28, 35, 27, 1, 41, 34, 1, 1];

let i = 0;
while (i < 9) {
  console.log(quokkasAge[i]);
  i++;
}

let j = 0;
while (j < 9) {
  if (quokkasAge[j] % 2 === 0) console.log(quokkasAge[j]);
  j++;
}

for (let i = 0; i < 9; i++) {
  if (quokkasAge[i] % 2 === 0) console.log(quokkasAge[i]);
}

//functions

function lowNum(array) {
  let a = 1;
  let lowest = array[0];
  while (a < array.length) {
    if (array[a] < lowest) {
      lowest = array[a];
    }
    a++;
  }
  return lowest;
}

// function lowNum(array) {
//   let lowest = array[0];
//   for (let a = 1; a < array.length; a++) {
//     if (array[a] < lowest) {
//       lowest = array[a];
//     }
//   }
//   return lowest;
// }

function lowNum(array) {
  let b = 1;
  let highest = array[0];
  while (b < array.length) {
    if (array[b] > highest) {
      highest = array[b];
    }
    b++;
  }
  return highest;
}

let arrayX = [83, 45, 17, 3, 9, 102, 10, 45, 77, 33, 17];

console.log(lowNum(arrayX));

function print(array, index) {
  return array[index];
}

console.log(print(arrayX, 6));

function sameNum(array) {
  let doubles = [];
  for (let c = 0; c < array.length; c++) {
    for (let d = c + 1; d < array.length; d++) {
      if (array[c] === array[d]) {
        doubles.push(array[c]);
      }
    }
  }
  return doubles;
}
console.log(sameNum(arrayX));

myColor = ["Red", "Green", "White", "Black"];

function combine(array) {
  let string = "";
  for (let e = 0; e < array.length; e++) {
    string = string + array[e] + ", ";
  }
  return string;
}

console.log(combine(myColor));

function reverseNum(number)




let exampleNum = 32443;