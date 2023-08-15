/*
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");
*/
//fixed :
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// map.keys() – returns an iterable for keys
//the error was simply because map.keys() returs an iterator not an array !
//and as long as it is not converted into an array no array methods can be used
let keyArrayForm = Array.from(keys);
keyArrayForm.push(
  "salam",
  "khub hastid?",
  "che khabar?",
  "daram test mikonm"
);
console.log(keyArrayForm);
