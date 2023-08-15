function aclean(arrayOfAnagrams) {
  const objectOfAnagrams = {};
  for (word of arrayOfAnagrams) {
    const sortedWord = word.split("").sort().join("").toLowerCase();
    objectOfAnagrams[sortedWord] = word;
    //{sortedWord:word}
  }
  console.log(Object.values(objectOfAnagrams));
}
const arr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];
aclean(arr); // "nap,teachers,ear" or "PAN,cheaters,era
