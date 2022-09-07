"use strict";

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript


const high = function (x) {
  const xCopy = [...x];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let digitBuckets = Array.from({ length: x.split(" ").length }, () => []);
  let init = [];

  const alphabetObj = {
    " ": 0,
  };

  for (let [x, o] of [...alphabet].entries()) alphabetObj[o] = x + 1;
  const xCopy1 = xCopy.map((x) => alphabetObj[x]);

  let countM = 0;
  for (let x of xCopy1) {
    digitBuckets[countM].push(x);
    if (x === 0) countM++;
  }
  for (const [x, o] of digitBuckets.entries())
    init.push(digitBuckets[x].reduce((x, o) => x + o, 0));

  const highest = Math.max(...init);
  const highestIndex = init.indexOf(highest);
  return x.split(" ")[highestIndex];
};

