// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  const vowelB = ["A", "E", "I", "O", "U"];
  const newA = [];
  for (const x of [...str])
    if (!vowel.includes(x) && !vowelB.includes(x)) newA.push(x);

  return newA.join("");
}
console.log(disemvowel("Lol h j i"));
