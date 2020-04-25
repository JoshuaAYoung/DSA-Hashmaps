const HashMap = require('./DSA-Hashmaps')
HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();
  lotr.set("Hobbit", "Bilbo")
  lotr.set("Hobbit", "Frodo")
  lotr.set("Wizard", "Gandalf")
  lotr.set("Human", "Aragorn")
  lotr.set("Elf", "Legolas")
  lotr.set("Maiar", "The Necromancer")
  lotr.set("Maiar", "Sauron")
  lotr.set("RingBearer", "Gollum")
  lotr.set("LadyOfLight", "Galadriel")
  lotr.set("HalfElven", "Arwen")
  lotr.set("Ent", "Treebeard")
  return lotr
}

const lotrHash = main()
console.log(lotrHash)

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

WhatDoesThisDo()

// 4 10 22 88 15 59 28 17 X  31 X
// 0 1  2  3  4  5  6  7  8  9  10

// 0  1  2  3  4  5  6  7  8
// 5  28 20 12 X  X  15 X  17
//    19             33
//    10   

function deleteDups(string) {
  stringArray = string.split('')
  const dupHash = new HashMap;
  dupHash._capacity = string.length;
  stringArray.reverse()
  let resultArray = []
  //add elements to the hashing table so that it doesn't return an error when we do the .get in the next map
  stringArray.map(char =>
    dupHash.set(char, 0)
  )
  //loop through and count how many times each of the items is called, setting the characters "value" as that count
  stringArray.map(char =>
    dupHash.set(char, dupHash.get(char) + 1)
  )

  //loop through the stringArray and push the character to the resultArray only if the "count" is 1. If it isn't, then subtract from the count.
  for (i = 0; i < stringArray.length; i++) {
    let character = stringArray[i]
    let count = dupHash.get(character)
    if (count === 1) {
      resultArray.push(character)
    }
    else {
      dupHash.set(character, count - 1)
    }
  }
  resultArray.reverse();
  console.log(resultArray.join(""))
}

deleteDups("google all that you think can think of")

function deleteDupsTwo(string) {
  stringArray = string.split('')
  const dupHash = new HashMap;
  dupHash._capacity = string.length;
  resultArray = []
  //adds all characters to the hash table so that our get in the loop doesn't throw an error
  stringArray.map(char =>
    dupHash.set(char, 'unseen')
  )

  for (let i = 0; i < stringArray.length; i++) {
    let char = stringArray[i]
    if (dupHash.get(char) === 'unseen') {
      resultArray.push(char)
      dupHash.set(char, 'seen')
    }
  }
  console.log(resultArray.join(''))
}

deleteDupsTwo("google all that you think can think of");

// function removeDuplicates() {
//   const string = 'google all that you think can think of';
//   let newStr = '';
//   let seen = {};
//   //loop through
//   // check if the key exists in seen;
//   // if it doesnt exist we add it with true or 1;
//   // if it does exist;
//   for (let i = 0; i < string.length; i++) {
//     if (seen[string[i]]) {
//       continue;
//     } else {
//       seen[string[i]] = true;
//     }
//   }
//   console.log(Object.keys(seen).join(''));
// }

// removeDuplicates()


//palindrome


// const palindrome = (string) => {
//   const palindromeMap = new Map()
//   let odd = 0
//   for (let i = 0; i < string.length; i++) {
//     if (palindromeMap.get(string[i]) === undefined) {
//       palindromeMap.set(string[i], 1)
//     }
//     else {
//       let char = palindromeMap.get(string[i])
//       palindromeMap.set(string[i], char += 1)
//     }
//   }
//   for (let i = 0; i < palindromeMap.size; i++) {
//     if (palindromeMap.get(string[i]) % 2 !== 0) {
//       odd++
//       console.log('odd', odd)
//     }
//     if (odd > 1) {
//       return false
//     }
//   }
//   return true
// }

// console.log(palindrome('acecarrr'))


// let input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

// function anagram(array) {
//   let newHash = new Map();

//   array.forEach((word) => {
//     const groupWords = sortWords(word);
//     const group = newHash.get(groupWords) || [];
//     newHash.set(groupWords, [...group, word]);
//   });
//   return Array.from(newHash.values());
// }
// const sortWords = (input) => input.split('').sort().join('');
// // if hash.length === 0 you have an anagram, push that to matching array

// console.log(anagram(input));