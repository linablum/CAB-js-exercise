let myBandList = [
  "Florence + the Machine",
  "The xx",
  "Aerosmith",
  "Foreigner",
  "Mighty Oaks",
];

function addBands(bands) {
  for (i = 0; i < bands.length; i++) {
    let list = document.createElement("li");
    list.textContent = bands[i];
    document.getElementById("band-list").appendChild(list);
  }
}

addBands(myBandList);
