// MAR 3 2023
//
//
// QUESTION 1
// Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.

// Examples
// countLoneOnes(101) ➞ 2
// countLoneOnes(1191) ➞ 1
// countLoneOnes(1111) ➞ 0
// countLoneOnes(462) ➞ 0

// Notes
// Tests will include positive whole numbers only.

// // SOLUTION
// function countLoneOnes(n) {
//   let sum = 0;
//   n = String(n);
//   for (let i = 0; i < n; i++) {
//     if (n[i] === "1" && n[i + 1] !== "1" && n[i - 1] !== "1") {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(countLoneOnes(101));
// console.log(countLoneOnes(1191));
// console.log(countLoneOnes(1111));
// console.log(countLoneOnes(462));

//
//
//
//
// QUESTION 2
// Your task, is to create N x N multiplication table, of size n provided in parameter.

// For example, when n is 5, the multiplication table is:

// 1, 2, 3, 4, 5
// 2, 4, 6, 8, 10
// 3, 6, 9, 12, 15
// 4, 8, 12, 16, 20
// 5, 10, 15, 20, 25
// This example will result in:

// [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
// Examples
// multiplicationTable(1) ➞ [[1]]
// multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

// // SOLUTION
// function multiplicationTable(n) {
//   let table = [];
//   for (let i = 1; i <= String(n); i++) {
//     let multiples = [];
//     for (let j = 1; j <= String(n); j++) {
//       multiples.push(i * j);
//     }
//     table.push(multiples);
//   }
//   return table;
// }

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(3));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(4));
//
//
//
//
// QUESTION 3
// Create a function that takes numbers b, m, and n as arguments and returns the definite integral of the function f(x)=(b+1)*x^b with respect to x from x=m to x=n, where b, m, and n are constants.

// Examples
// integral(0, 2, 5) ➞ 3
// integral(2, 4, 7) ➞ 279
// integral(5, 9, 3) ➞ -530712

// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
// Assume that b will be an integer greater than or equal to 0.
// m and n can be any integer, both positive and negative.

// // SOLUTION
// function integral(b, m, n) {
//   return n ** (b + 1) / (b + 1) - m ** (b + 1) / (b + 1);
// }
// console.log(integral(0, 2, 5));
// console.log(integral(2, 4, 7));
// console.log(integral(5, 9, 3));

// MAR 04 2023
//
//
//
//
//
// QUESTION 1
//
//
// There are many different styles of music and many albums exhibit
// multiple styles. Create a function that takes an array of musical
//  styles from albums and returns how many styles are unique.

// Examples
// uniqueStyles([
//   "Dub,Dancehall",
//   "Industrial,Heavy Metal",
//   "Techno,Dubstep",
//   "Synth-pop,Euro-Disco",
//   "Industrial,Techno,Minimal"
// ]) ➞ 9

// uniqueStyles([
//   "Soul",
//   "House,Folk",
//   "Trance,Downtempo,Big Beat,House",
//   "Deep House",
//   "Soul"
// ]) ➞ 7

// // SOLUTION
// function uniqueStyles(arr){
//   let unique=new Set(arr.join(',').split(','))
//   return unique.size

// }

// console.log
// (uniqueStyles([
//   "Dub,Dancehall",
//   "Industrial,Heavy Metal",
//   "Techno,Dubstep",
//   "Synth-pop,Euro-Disco",
//   "Industrial,Techno,Minimal"
// ]) )

// console.log
// (uniqueStyles([
//   "Soul",
//   "House,Folk",
//   "Trance,Downtempo,Big Beat,House",
//   "Deep House",
//   "Soul"
// ]))
//
//
//
// QUESTION 2
// Make a function that encrypts a given input with these steps:

// Input: "apple"

// Step 1: Reverse the input: "elppa"

// Step 2: Replace all vowels using the following chart:

// a => 0
// e => 1
// i => 2
// o => 2
// u => 3

// // "1lpp0"
// Step 3: Add "aca" to the end of the word: "1lpp0aca"

// Output: "1lpp0aca"

// Examples
// encrypt("banana") ➞ "0n0n0baca"

// encrypt("karaca") ➞ "0c0r0kaca"

// encrypt("burak") ➞ "k0r3baca"

// encrypt("alpaca") ➞ "0c0pl0aca"
// Notes
// All inputs are strings, no uppercases and all output must be strings.

// // SOLUTION
// function encrypt(word) {
//   let reversedWrd = word.split("").reverse().join("");
//   let replaced = "";
//   const vowel = {
//     a: 0,
//     e: 1,
//     i: 2,
//     o: 2,
//     u: 3,
//   };

//   for (let i = 0; i < reversedWrd.length; i++) {
//     if (vowel[reversedWrd[i]] !== undefined) {
//       let ltr = vowel[reversedWrd[i]];
//       replaced += ltr;
//     } else replaced += reversedWrd[i];
//   }

//   return replaced + "aca";
// }

// console.log(encrypt("banana"));
// console.log(encrypt("karaca"));
// console.log(encrypt("burak"));
// console.log(encrypt("alpaca"));
//
//
//
// QUESTION 3
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

// Examples
// firstRepeat("legolas") ➞ "l"

// firstRepeat("Gandalf") ➞ "a"

// firstRepeat("Balrog") ➞ "-1"

// firstRepeat("Isildur") ➞ "-1"
// // Case sensitive "I" not equal to "i"
// Notes
// Tests are case sensitive.

// // SOLUTION
// function firstRepeat(chars) {
//   let obj = {};
//   for (let ch of [...chars]) {
//     if (obj[ch]) {
//       return ch;
//     } else {
//       obj[ch] = 1;
//     }
//   }
//   return "-1";
// }
// console.log(firstRepeat("legolas"));
// console.log(firstRepeat("Gandalf"));
// console.log(firstRepeat("Balrog"));
// console.log(firstRepeat("Isildur"));

//
//
//
//
// MAR 05 2023
//
// QUESTION 1
// Write a function that divides an array into chunks of size n, where n is the length of each chunk.

// Examples
// chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

// chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

// chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

// chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

// chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]

// Notes
// It's O.K. if the last chunk is not completely filled (see example #2).
// Integers will always be single-digit.

// // SOLUTION
// function chunkify(arr, size) {
//   let new_arr = [];
//   if (!arr || arr.length <= size) return [arr];

//   for (let i = 0; i < arr.length; i += size) {
//     chunk = arr.slice(i, size + i);
//     new_arr.push([chunk]);
//   }
//   return new_arr;
// }
// console.log(chunkify([2, 3, 4, 5], 2));
// console.log(chunkify([2, 3, 4, 5, 6], 2));
// console.log(chunkify([2, 3, 4, 5, 6, 7], 3));
// console.log(chunkify([2, 3, 4, 5, 6, 7], 1));
// console.log(chunkify([2, 3, 4, 5, 6, 7], 7));
//
//
//
//
//  QUESTION 2
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// Examples
// duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

// duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

// duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
// Notes
// The given array won't contain the same number three times.

// // SOLUTION
// function duplicateNums(nums) {
//   let new_arr = [];
//   output_arr = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (new_arr.includes(nums[i])) {
//       new_arr.push(nums[i]);
//       output_arr.push(nums[i]);
//     } else {
//       new_arr.push(nums[i]);
//     }
//   }
//   return output_arr;
// }
// console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6]));
// console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]));
// console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//
//
//
// QUESTION 3
// Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

// Examples
// consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true

// consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false

// consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false

// consecutiveCombo([44, 46], [45]) ➞ true
// Notes
// The input arrays will have unique values.
// The input arrays can be in any order.

// // SOLUTION
// function consecutiveCombo(arr1, arr2) {
//   let new_arr = [...arr1, ...arr2];
//   new_arr.sort(function (a, b) {
//     return a - b;
//   });

//   for (let i = 0; i < new_arr.length - 1; i++) {
//     if (new_arr[i] + 1 !== new_arr[i + 1]) return false;
//   }
//   return true;
// }

// console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]));
// console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]));
// console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]));
// console.log(consecutiveCombo([44, 46], [45]));
//
//
//
//
// MAR 06 2023
//
//
// QUESTION 1
// Mubashir needs your help to find out the next happy year.

// A Happy Year is the year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

// Examples
// happyYear(2017) ➞ 2018
// // 2018 has all distinct digits

// happyYear(1990) ➞ 2013

// happyYear(2021) ➞ 2031

// // SOLUTION
// function happyYear(year) {
//   let final_year;
//   while (year) {
//     year += 1;
//     final_year = String(year);
//     let newSet = new Set(final_year);
//     if (newSet.size === final_year.length) return final_year;
//   }
//   return final_year;
// }

// console.log(happyYear(2017));
// console.log(happyYear(1990));
// console.log(happyYear(2021));
// console.log(happyYear(20000));
//
//
//
//
// QUESTION 2
// In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!

// Given a matrix mtx, implement a function that returns the complete sentence as a string, with the words separated by a space between them.

// Examples
// transposeMatrix([
//   ["Enter"],
//   ["the"],
//   ["Matrix!"]
// ]) ➞ "Enter the Matrix!"

// transposeMatrix([
//   ["The", "are"],
//   ["columns", "rows."]
// ]) ➞ "The columns are rows."

// transposeMatrix([
//   ["You", "the"],
//   ["must", "table"],
//   ["transpose", "order."]
// ]) ➞ "You must transpose the table order."
// Notes
// All given matrices are regular, as to say that each column has the same length.
// Punctuation is already given, you just have to add the spaces in the returned string.

// // SOLUTION
// function transposeMatrix(mtx) {
//   return mtx.flat(1).join(" ");
// }

// console.log(transposeMatrix([["Enter"], ["the"], ["Matrix!"]]));
// console.log(
//   transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."],
//   ])
// );
// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ])
// );
//
//
//
//
// QUESTION 3
// Create a function that returns the sum of missing numbers.

// Examples
// sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// // 2 + 4 + 6 + 8 + 9

// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575

// Notes
// The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

// // SOLUTION
// function sumMissingNumbers(arr) {
//   const min_value = Math.min(...arr);
//   const max_value = Math.max(...arr);
//   let sum = 0;

//   for (let i = min_value; i < max_value; i++) {
//     if (!arr.includes(i)) sum += i;
//   }
//   return sum;
// }

// console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
// console.log(sumMissingNumbers([10, 7, 5, 3, 1]));
// console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
//
//
//
//
//
//
// MAR 7 2023
//
//
// QUESTION  1
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

// Examples
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.

// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Missing 6 from target array.

// Notes
// Arrays do not have to be sorted (see example #2).
// Arrays should concatenate to create the final array exactly (see examples #3 and #4).

// // SOLUTION
// function canConcatenate(arr, target) {
//   let flat_arr = arr.flat(10).sort();
//   if (flat_arr.length !== target.length) return false;
//   let flat_arr2 = flat_arr;

//   target.sort();

//   for (let i = 0; i < flat_arr2.length - i; i++) {
//     if (flat_arr2[i] !== target[i]) return false;
//   }

//   return true;
// }

// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6],
//     ],
//     [7, 6, 5, 4, 3, 2, 1]
//   )
// );
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6, 7],
//     ],
//     [1, 2, 3, 4, 5, 6, 7]
//   )
// );
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7],
//     ],
//     [1, 2, 3, 4, 5, 6, 7]
//   )
// );
// console.log(
//   canConcatenate(
//     [[[[9, [[[1]]]]]], [2, 1, 3], [5, 4, 7]],
//     [1, 2, 3, 4, 5, 6, 9, 1, 7]
//   )
// );
//
//
//
// QUESTION 2
// Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

// Worked Example
// threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// // 1st word: "eda"
// // 2nd word: "dab"
// // 3rd word: "abi"
// // 4th word: "bit"
// // Remember to sort the array!
// Examples
// threeLetterCollection("slap") ➞ ["lap", "sla"]

// threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

// threeLetterCollection("cat") ➞ ["cat"]

// threeLetterCollection("hi") ➞ []

// Notes
// Return an empty array if given a word with less than 3 letters.

// // SOLUTION
// function threeLetterCollection(s) {
//   let output_arr = [];
//   for (let i = 0; i < s.length - 1; i++) {
//     let three_alpha = s.slice(i, i + 3);
//     if (three_alpha.length === 3) output_arr.push(three_alpha);
//   }
//   return output_arr.sort();
// }

// console.log(threeLetterCollection("edabit"));
// console.log(threeLetterCollection("slap"));
// console.log(threeLetterCollection("click"));
// console.log(threeLetterCollection("cat"));
// console.log(threeLetterCollection("hi"));
//
//
//
// QUESTION 3
// Unfair hurdles are hurdles which are either too high, or way too close together.

// Create a function which takes in an array of strings, representing hurdles, and returns whether or not they are unfair. For the purposes of this challenge, unfair hurdles are:

// At least 4 characters tall.
// Strictly less than 4 spaces apart.
// Examples
// // Hurdle are good distance apart but are way too tall.

// isUnfairHurdle([
//   "#    #    #    #",
//   "#    #    #    #",
//   "#    #    #    #",
//   "#    #    #    #"
// ]) ➞ true

// // Hurdles are a fine height but are way too close together.

// isUnfairHurdle([
//   "#  #  #  #",
//   "#  #  #  #",
//   "#  #  #  #"
// ]) ➞ true

// // These hurdles are mighty splendid.

// isUnfairHurdle([
//   "#      #      #      #",
//   "#      #      #      #"
// ]) ➞ false

// Notes
// Hurdles will be represented with a hashtag "#".
// There will be the same spacing between hurdles.
// Hurdles are always as high as the length of the array.
// Hurdles are always evenly spaced.

// // SOLUTION
// function isUnfairHurdle(hurdles) {
//   for (let i = 0; i < hurdles.length - 1; i++) {
//     if (hurdles[i + 1] && hurdles[i - 1]) {
//       if (
//         hurdles[i].length !== hurdles[i + 1].length ||
//         hurdles[i].length !== hurdles[i - 1].length
//       )
//         return false;
//     }
//   }
//   return true;
// }
// console.log(
//   isUnfairHurdle([
//     "#    #    #    #",
//     "#    #    #    #",
//     "#    #    #    #",
//     "#    #    #    #",
//   ])
// );
// console.log(isUnfairHurdle(["#  #  #  #", "#  #  #  #", "#  #  #  #"]));
// console.log(
//   isUnfairHurdle(["#      #      #      #", "#      #      #      #"])
// );
