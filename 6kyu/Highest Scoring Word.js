// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x) {
  const bla = x.split(" ");
  // bla

  const tres = `abcdefghijklmnopqrstuvwxyz`.split("");
  x = x.split("");
  let ree = [];
  for (const xr of x) {
    const c = tres.indexOf(xr);
    // console.log(c + 1);

    ree.push(c + 1);
  }
  console.log(ree);
  let v = [];
  let con = 0;
  // console.log(ree);

  for (let xr of ree) {
    console.log(xr);

    // con = con + xr;
    con += xr;
    if (xr === 0) {
      // con;

      v.push(con);
      con = 0;
    }
  }
  
  console.log(bla[v.indexOf(Math.max(...v))]);
  return bla[v.indexOf(Math.max(...v))];
}
high("what time are we climbing up the volcano");
// high("man taxi need a taxi up to ubud");
// high("aa b");
// high("take me to semynak");
