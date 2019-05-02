let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function sampleUrls(elements) {
    return elements.map(element => "https://example.com/" + 
        element.toLowerCase().split(/\s+/).join("-"));
}
console.log(sampleUrls(states));

function findDakota(elements) {
    return elements.filter(element => element.includes("Dakota"));
}

console.log(findDakota(states));

function findTwoPart(elements) {
    return elements.filter(element => (element.split(/\s+/).length > 1));
}

console.log(findTwoPart(states));