// let func = (str) => {
//     let words = str.toLowerCase().match(/\b[\w']+\b/g);
//     const countItems = {};
//     if (!words) {
//         return [];
//     }
//     for (const word of words) {
//         countItems[word] = countItems[word] ? countItems[word] + 1 : 1;
//     }
//     const sortedWords = Object.keys(countItems).sort((a, b) => countItems[b] - countItems[a]);
//     return sortedWords.slice(0, 3);
// }

// console.log(func("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."));





// function topThreeWords(text) {
//     const res = [];
//     const words = text.match(/[a-zA-Z']+/g) || [];
//     words.forEach(word => {
//         if (/[a-zA-Z]/.test(word)) {
//         }
//     });
//     const wordCounts = res.reduce((counts, word) => {
//         counts[word] = (counts[word] || 0) + 1;
//         return counts;
//     }, {});
//     const topThree = Object.entries(wordCounts)
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, 3)
//         .map(entry => entry[0]);
//     return topThree;
// }





// let func = (n) => {
//     return n.toString(2)
// }

// console.log(func(11));




// let func = (birds) => {
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((el)=>{
//     if(geese.includes(el)){
//       return !el
//     }else{
//         return el
//     }
//   })
// }

// console.log(func(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));






let func = (input) => {
  const str = input.toString(); 
  const r = [];

  function permute(str, left, right) {
      if (left == right) {
          r.push(str);
      } else {
          for (let i = left; i <= right; i++) {
              str = swap(str, left, i);
              permute(str, left + 1, right);
          }
      }
  }

  function swap(a, i, j) {
      const charArray = a.split("");
      const temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
      return charArray.join("");
  }

  permute(str, 0, str.length - 1);
  let sorted = r.sort((a,b)=>a-b).indexOf(String(input))
  return r[sorted -1]
}

console.log(func(2071)); 







// let func = (str) => {
//     const r = [];
    
//     function permute(str, left, right) {
//         if (left == right) {
//             r.push(str);
//         } else {
//             for (let i = left; i <= right; i++) {
//                 str = swap(str, left, i);
//                 permute(str, left + 1, right);
//             }
//         }
//     }
//     function swap(a, i, j) {
//         const charArray = a.split('');
//         const temp = charArray[i];
//         charArray[i] = charArray[j];
//         charArray[j] = temp;
//         return charArray.join("");
//     }
//     permute(str, 0, str.length - 1);
//     let mid = Math.floor(r.length / 2)
    
//     return [...new Set(r)]
// }

// console.log(func('abcdxg'));