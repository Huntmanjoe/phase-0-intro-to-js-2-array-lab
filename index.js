const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const newcats = cats.slice();
    newcats.push("Broom");
    return newcats;
}
function prependCat() {
    const newcats = cats.slice();
    newcats.unshift("Arnold");
    return newcats;
}
function removeLastCat() {
    const newcats = cats.slice();
    newcats.pop();
    return newcats;
}
function removeFirstCat() {
    const newcats = cats.slice();
    newcats.shift();
    return newcats;
}