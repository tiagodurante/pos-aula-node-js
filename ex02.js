var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

var file = fs.readFileSync("file.mp4");
console.log(file);

console.timeEnd("leitura");
console.log("Ja li", Date.now());
