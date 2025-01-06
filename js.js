// let func = (str) => {
//   const charCount = {};
//   const lowerStr = str.toLowerCase();

//   lowerStr.split("").forEach((char) => {
//     charCount[char] = (charCount[char] || 0) + 1;
//   });

//   return lowerStr
//     .split("")
//     .map((char) => (charCount[char] > 1 ? ")" : "("))
//     .join("");
// };

// console.log(func("Success"));





// let func = (str) => {
//     const arr = [];
//     for (let i = 0; i < str; i++) {
//         const stars = '*'.repeat(2 * i + 1);
//         const spaces = ' '.repeat(str - i - 1);
//         arr.push(spaces + stars + spaces);
//     }
//     return tower.join('\n');
// };

// console.log(func(5));




// let func = (arr) => {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return [];
//     }
//     return arr.sort((a, b) => a - b);
// };

// console.log(func(null));





// let func = (num) => {
//   let r = String(num).split('').sort((a,b)=>b-a).join('');
//   return Number(r)
// }

// console.log(func(132435));





// function add(num) {
//   return function sum() {
//     console.log(10 + num);
//   };
// }

// add(4)();

// let isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let count = {};

//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!count[char]) {
//       return false;
//     }
//     count[char]--;
//   }

//   return true;
// };

// console.log(isAnagram('listen', 'silent'));
// console.log(isAnagram('hello', 'world'));





// let func = (arr, n) => {
//   // Sort by length and take the last 'n' elements, reversing their order
//   return arr.sort((a, b) => a.length - b.length).slice(-n).reverse().join('');
// };

// console.log(func(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));




// function longestConsec(arr, n) {
//   if (arr.length === 0 || n > arr.length || n <= 0) return "";

//   let longest = "";

//   for (let i = 0; i <= arr.length - n; i++) {
//       const current = arr.slice(i, i + n).join('');
//       if (current.length > longest.length) {
//           longest = current;
//       }
//   }

//   return longest;
// }





// let func = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//       result += ` ${str[i]}`;
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// };

// console.log(func('aCdwAdc'));





// let func = (a,b,c) => {
//   if(a+b>c && b+c>a && a+c>b){
//     return true;
//   }
//   else{
//     return false;
//   }
// }





// let func = (num) => {
//   return Math.ceil(num / 5) * 5;
// }





// let func = (array) => {
//   return array.map((el)=>{
//     if(el < 0){
//       return String(el)
//     }else {
//       return el*2-el
//     }
//   })
// }

// console.log(func([1,2,-4]));





// let func = (str) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   const cleaned = str.toLowerCase().replace(/[^a-z]/g, "");
//   const uniqueLetters = new Set(cleaned);
//   if(uniqueLetters.size == 26){
//     return true
//   }else{
//     return false
//   }
// };

// console.log(func("The quick brown fox jumps over the lazy dg."));





// let func = (s) => {
//     return s.split(' ').sort((a,b)=>a.length - b.length)[0].length
// }

// console.log(func("bitcoin take over the world maybe who knows perhaps"));





// let func = (n)=>
// {
//     return (n != 1) ? n * func(n - 1) : 1;
// }

// console.log(func(5));




// let func = (str) => {
//   return str.split(" ").map((el) => {
//     return `${el} ${el.length}`;
//   });
// };



// let func = (arr) => {
//     return arr.sort((a,b)=>a-b)[0] + arr.sort((a,b)=>a-b)[1]
// }

// console.log(func([1,4,5,2]));



// let func = (x) => {
//     return x == x.split('').reverse().join('')
// }

// console.log(func('afsa'));



// let func = (arr)=>{
//     let a = arr.slice(-1)[0] + 1
//     let r = []
//     for(let i = arr[0];i<a;i++){
//         r.push(i)
//     }
//     return r
// }

// console.log(func([1,2,3,6,7]));



// let func = (arr) => {
//     let u = [...new Set(arr)];
//     return Number(u.sort((a,b)=>a-b).join(''))
// }

// console.log(func([1, 9, 1, 3, 7, 4, 6, 6, 7]));




// let func = (n) =>{
//     return Number(String(n).split('').filter((el)=>{
//         if(el == '0'){
//           return !el
//         }
//         else{
//           return el
//         }
//       }).join(''))
    
// }

// console.log(func(1300));




// let func = (x, n) => {
//     let arr = [];
//     for (let i = x; i <= n * x; i += x) {
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(func(1, 10)); 
// console.log(func(2, 5));