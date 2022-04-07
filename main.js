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

for (let i = 0; i < 8; i++) {
  console.log(rosegoldQuokkas[i]);
}

let quokkasAge = [44, 28, 35, 27, john, 41, 34, marta, ale];

let i = 0;
while (i < 8) {
  console.log(quokkasAge[i]);
  i++;
}

for (let i = 0; i < 8; i++) {
  console.log();
}
