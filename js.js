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



// let func = (str) => {
//     return str.sort()[0].split('').map((el)=>{
//         return `${el}***`
//     }).join('').split('').reverse().join('').replace('***','').split('').reverse().join('')
// }

// console.log(func(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));



// let func = (str) => {
    // return str.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' '); 
// };

// console.log(func("4of Fo1r pe6ople g3ood th5e the2"));



// let func = (n,s) => {
//     let r = ''
//     for(let i = 0;i<n;i++){
//         r+=s
//     }
//     return r
// }

// console.log(func(6, 'Hi'));






// let func = (str) => {
//     let filtered = str.replace(/[^a-zA-Z]/g, '');
//     return filtered.split('').reverse().join('');
// };

// console.log(func('ultr53o?n')); 





// let func = (str) => {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         let modifiedStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//         result.push(modifiedStr);
//     }
//     return result.filter((el)=>el !== str)
// }

// console.log(func('hello world'));



// let func = (arr) => {
//     return arr.map((el) => el.sort((a, b) => a - b)[0]).reduce((acc,el)=>{
//         return acc + el
//     },0)
// };

// console.log(func([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));




// let func = (str) => {
//     let str1 = str.split('').map((el,idx)=>{
//         if(idx % 2 === 0){
//             return el.toUpperCase()
//         }
//         return el.toLowerCase()
//     }).join('')

//     let str2 = str.split('').map((el,idx)=>{
//         if(idx % 2 === 1){
//             return el.toUpperCase()
//         }
//         return el.toLowerCase()
//     }).join('')

//     return [str1,str2]
// }

// console.log(func('codewars'));



// let func = (s) =>{
//     let a = 'aeiouAEIOU'
//     let r = ''
//     for(let i = 0;i < s.length;i++){
//       if(a.includes(s[i])){
//         r+='!'
//       }else{
//         r+=s[i]
//       }
      
//     }
//     return r
// }

// console.log(func('asaa'));



let func = (arr) =>{
    let sort = arr.sort((a,b)=>a-b) 
    if(sort[0] === sort[1]){
        return sort.slice(-1)[0]
    }
    else{
        return sort[0]
    }
}

console.log(func([ 1, 1, 1, 2, 1, 1 ]));
