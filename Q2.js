function sortFromHightoLow(...arrays) {
  //Array.flat() method assists in flattening deeply nested arrays
  const combinedArray = arrays.flat();
  const sortedArray = combinedArray.sort((a, b) => b - a);
  //   console.log(...sortedArray);
  //because the function should either return an array or a value , it can not return values seperated by commas
  return sortedArray.join(",");
}
const testData1 = sortFromHightoLow([5, 6, 2], [3, 7, 1]); //===> 7,6,5,3,2,1
const testData2 = sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8]); // ===> 8,7,6,5,4,3,2,2,1
console.log(testData1);
console.log(testData2);
