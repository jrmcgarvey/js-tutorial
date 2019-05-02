let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character) => {
  console.log(character);
});

let a2 = [8, 17, 42, 99];
a2.sort(function(a, b) { return a - b; });
a2.forEach(function(element) {
    console.log(element);
})