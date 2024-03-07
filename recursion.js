/** product: calculate the product of an array of numbers. */

function product(nums, products=1) {
  // console.log(products);
  // console.log(nums.length);
  if(nums.length === 0) return products
 products *= nums[0]

//  product(nums, nums.slice(1) * products)
  return product(nums.slice(1), products)
    
}

console.log(product([2, 3, 4]));

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, max=0, maxI = 0) {
 //we need to count the length of string
 // 
 if(words.length === i) return maxI
 if(words[i].length >= max) {
    max = words[0].length
    maxI = i
    return longest(words, i + 1, max, maxI)
 } else{
  return longest(words, i + 1, max, maxI)
 }

}

console.log(longest(["hello", "hi", "hola"]));
/** everyOther: return a string with every other letter. */

function everyOther(str, i=0 , word="") {
  // console.log(word);
  if(str.length <= i) return word
  if(i === 0) return everyOther(str, i+2, word += str[i])
  return everyOther(str, i+2, word += str[i])
}
console.log(everyOther("hello"));
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
if(arr[i] === val) return i
if(arr.length === i) return -1
return findIndex(arr, val, i+1)
}

let animals = ["duck", "cat", "pony"];

console.log(findIndex(animals, "cat"));  // 1
console.log(findIndex(animals, "porcupine"));   // -1
/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length-1, stri = "") {
if(i < 0) return stri
return revString(str, i-1, stri += str[i])
}

console.log(revString("porcupine")) // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
