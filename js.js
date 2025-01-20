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
//         const end = '*'.repeat(2 * i + 1);

//         const spaces = ' '.repeat(str - i - 1);
//         arr.push(spaces + stars + spaces );
//     }
//     return arr.join('\n');
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

// console.log(func('This website is for losers LOL!'));



// let func = (arr) =>{
//     let sort = arr.sort((a,b)=>a-b) 
//     if(sort[0] === sort[1]){
//         return sort.slice(-1)[0]
//     }
//     else{
//         return sort[0]
//     }
// }

// console.log(func([ 1, 1, 1, 2, 1, 1 ]));




// function combineStrings(...args) {
//     if (args.length === 0) {
//         return "";
//     }
//     if (args.length === 1) {
//         return args[0];
//     }

//     const maxLength = Math.max(...args.map(str => str.length));

//     let result = "";
//     for (let i = 0; i < maxLength; i++) {
//         for (let str of args) {
//             if (i < str.length) {
//                 result += str[i];
//             }
//         }
//     }

//     return result;
// }

// console.log(combineStrings('abc', '123')); 
// console.log(combineStrings('abcd', '123')); 
// console.log(combineStrings('abc', '123', '£$%')); 
// console.log(combineStrings('abc')); 
// console.log(combineStrings()); 



// async function action() {
//     return new Promise(resolve => setTimeout(resolve, 1000)); // Задержка в 1 секунду
// }




// function encryptToMorse(sentence) {
//     return sentence
//         .toUpperCase() // Convert to uppercase as Morse code is case-insensitive
//         .split(' ') // Split sentence into words
//         .map(word => word
//             .split('') // Split each word into characters
//             .map(char => CHAR_TO_MORSE[char] || '') // Convert each character to Morse code
//             .join(' ') // Join Morse code for characters with single space
//         )
//         .join('   '); // Join words with triple space
// }

// // Example usage:
// const CHAR_TO_MORSE = {
//     'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
//     'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
//     'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
//     'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
//     'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
//     'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
//     'Y': '-.--',  'Z': '--..',
//     '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
//     '5': '.....', '6': '-....', '7': '--...', '8': '---..',
//     '9': '----.', '0': '-----',
//     ' ': '',      '.': '.-.-.-', ',': '--..--', '?': '..--..',
//     "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', 
//     ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', 
//     '=': '-...-',  '+': '.-.-.', '-': '-....-', '_': '..--.-', 
//     '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
// };

// console.log(encryptToMorse("sos")); 
// Output: ".... . .-.. .-.. ---   .-- --- .-. .-.. -.."





// let word = {
//     'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 
//     'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 
//     'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 
//     't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
// };

// let func = (str) => {
//     let words = str.toLowerCase().split(' '); 
//     let scores = words.map(el => {
//         return el.split('').reduce((acc, char) => acc + word[char], 0);
//     });

//     let maxScore = Math.max(...scores);

//     let maxWords = words.filter((_, idx) => scores[idx] === maxScore);

//     return maxWords[0]; 
// };

// console.log(func('aaa b')); 




// let func = (arr ,n) => {
//     let arr1 = []
//      arr.filter((el,idx)=>{
//         if (el + el !== n) {
//             arr1.push(idx); // Возвращаем индекс, если условие выполняется
//         }
//     })
//     return arr1
// }

// console.log(func([3, 2, 4], 6));


// let func = (arr, n) => {
//     let indices = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === n) {
//                 indices.push(i, j);
//                 return indices; 
//             }
//         }
//     }
//     return indices; 
// };

// console.log(func([3, 2, 4], 6)); 





// let func = (s) =>{
//     let r = ''
//     for(let i = 0;i < s.length;i++){
//       if('T'.includes(s[i])){
//         r+='U'
//       }else{
//         r+=s[i]
//       }
      
//     }
//     return r
// }

// console.log(func('GCAT'));



// let func = (...years) => {
//     let a = years.map((el)=>{
//         return el * el
//     }).reduce((acc,el)=>{
//         return acc + el
//     },0)
//     return Math.floor(Math.sqrt(a) / 2)
// }

// console.log(func(65,60,75,55,60,63,64,45));




// let func = (arr) => {
//     if(arr.length === 1){
//         arr.push(0)
//         return arr
//     }else{
//         let arr1 = [];
//     let arr2 = [];
//     let res = []
//     let sum1 = 0;
//     let sum2 = 0;

//     arr.map((el,idx)=>{
//         if(idx % 2 === 0){
//             arr1.push(el)
//         }else {
//             arr2.push(el)
//         }
//     })
//     for(let i = 0;i<arr1.length;i++){
//         sum1 += arr1[i]
//     }
//     for(let i = 0;i<arr2.length;i++){
//         sum2 +=arr2[i]
//     }
//     res.push(sum1)
//     res.push(sum2)
//     return res
//     }
    
// }

// console.log(func([13,27,427,427,4]));



// let func = (arr) => {
//     if(arr.length === 1){
//         arr.push(arr[0])
//         return arr
//     } 
//     let a = arr.sort((a,b)=>a-b).slice(-1)[0]
//     let b = arr.sort((a,b)=>a-b)[0]
//     return [b,a]
// }

// console.log(func([2334454,5,1,2,3,4]));






// let func = (arr, asc) => {
//     if(asc === true){
//         return arr.sort((a,b)=>a+b)    
//     }else{
//         return arr.sort((a,b)=>a+b)    

//     }
// }

// console.log(func([1, 2, 3, 4, [-5,-4]], false));





// let func = (url) => {
//     url = url.replace("https://", "").replace("http://", "").replace("www.", "");
//     return url.split('.')[0];
// }

// console.log(func('http://github.com/carbonfive/raygun'));




// let func = (arr1, arr2) => {
//     let r = []
//     for(let i = 0;i<arr1.length;i++){
//       r.push(arr1[i])
//     }
    
//     for(let i = 0;i<arr2.length;i++){
//       r.push(arr2[i])
//     }
//     let res = [...new Set(r)]
//     return res.sort((a,b)=>a-b)
//   }

//   console.log(func([1,2,3,4], [5,6,7,8]));






// let func = (array) => {
//     return array.map((el)=>{
//         if(el < 0){
//           return el*2 + el 
//         }
//         else if (el => 0){
//           return el*2 - el 
//         }
//     })
      
// }

// console.log([1, 2, 3, 4, 5]);







// let func = (str) => {
//     let res = ''
//     let word = 'qwertyuiopasdfghjklmnbvcxz'
//     for(let i = 0;i<str.length;i++){
//         if(word.includes(str[i])){
//             res+=str[i]
//         }
//     }
//     return res
// }

// console.log(func('a;!kdmf2w30'));




// let func = (str) => {
//     return str.split(' ').reverse().join(' ')
// }

// console.log(func('Ruslan Anarbekov'));





// let func = (arr) => {
//     return arr.slice(-1)[0]
// }

// console.log(func([1,2,3,4,5,6,7,8,123,4,5]));



// function factorial(n) {
//     if (!Number.isInteger(n)) {
//       throw new RangeError("Input must be an integer");
//     }
//     if (n < 0) {
//       throw new RangeError("Input must be a non-negative integer");
//     }
//     return n > 1 ? n * factorial(n - 1) : 1;
//   }





// const factorial = n => n ? factorial(n - 1) * n : 1;




// function canFormOriginal(derived) {
//     const n = derived.length;

//     // Функция для проверки с заданным начальным значением original[0]
//     function checkStart(start) {
//         const original = Array(n).fill(0); // Создаем массив original длины n
//         original[0] = start;

//         // Построим весь массив original
//         for (let i = 1; i < n; i++) {
//             original[i] = derived[i - 1] ^ original[i - 1]; // derived[i-1] = original[i-1] ⊕ original[i]
//         }

//         // Проверим замкнутость цикла
//         return (original[n - 1] ^ original[0]) === derived[n - 1];
//     }

//     // Проверяем два варианта: original[0] = 0 и original[0] = 1
//     return checkStart(0) || checkStart(1);
// }

// // Примеры
// console.log(canFormOriginal([1, 1, 0])); // true
// console.log(canFormOriginal([1, 0]));    // false
// console.log(canFormOriginal([1, 1]));    // true





// let func = (x) => {
//     let num = String(x).split('').reverse().join('')
//     return Number(num) == x
// } 

// console.log(func(12));




// let func = (head) => {
//     if(head.length > 10**5){
//         return false
//     }

//     let reverseHead = [...head].reverse();
//     return String(head) === String(reverseHead); 
// }

// console.log(func([1,2,2,1]));





// let func = (s) => {
//     const RIM = {
//     'I': '1',    'X': '10',  'C': '100',  'M': '1000',
//     'V': '5',     'L': '50',  'D': '500',  
// };



// return s.split('').map((el)=>{
//     return Number(RIM[el]) || ''
// })


    
// };

// console.log(func('MCMXCIV'));





// var romanToInt = function(s) {
//     const RIM = {
//     'I': '1',    'X': '10',  'C': '100',  'M': '1000',
//     'V': '5',     'L': '50',  'D': '500',  
// };

// let arr = s.split('').map((el)=>{
//     return Number(RIM[el]) || ''
// })

// let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
//             total += arr[i + 1] - arr[i];
//             i++; // Skip the next number as it's already processed
//         } else {
//             total += arr[i];
//         }
//     }

//     return total;
// };




// let func = (str , n) => {
//     return str.slice(0,n)
// }

// console.log(func('hello wrefoh',2 ));
// console.log(func([1,2,3,4,5],3 ));




// let func = (arr) => {
//     return arr.map((el,idx)=>{
        // if(el % 2 === 0){
        //     return el = 'жуп'
        // }else{
        //     return el = 'так'
        // }
//     })
// }

// console.log(func([1,2,3]));






// let func = (arr) => {
//     let result = []
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             result += arr[i] = 'жуп '
//         }else{
//             result +=  arr[i] = 'так '
//         }
//     }
//     return result
// }

// console.log(func([1,2,3,4,5]));





// let func = (str) => {
//     return str.split(',').filter((el)=>{
//         if(el === 'Aziret'){
//             return el = ''
//         }
//         else{
//             return el
//         }
//     })
// }

// console.log(func('Ruslan,Islam,Aziret'));




// let func = (arr) => {
//     let r = arr.sort((a,b)=>a+b)[0]
//     let r1 = arr.sort((a,b)=>b-a)[0]
//     if(arr[0] < arr[1]){
//         return arr.filter((el)=>{
//             if(el === r){
//                 return !el
//             } 
//             return el
//         })
//     }
//     else {
//         return arr.filter((el)=>{
//             if(el === r1){
//                 return !el
//             } 
//             return el
//         })
//     }
    
// }

// console.log(func([1, 2, 3, 4, 5]));




// let func = (arr) => {
//     return arr.filter((el,idx)=>{
//         if(el % idx === 0 ){
//             return el
//         }
//         else{
//             return !el
//         }
//     })
// }

// console.log(func([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));





// let func = (arr) => {
//     const smileRegex = /^[:;][-~]?[)D]$/; // Регулярное выражение для проверки смайликов
//     return arr.reduce((acc, el) => smileRegex.test(el) ? acc + 1 : acc, 0);
// }

// console.log(func([';]', ':]', ';)', ':$', 'D'] ));


// let func = (arr) => {
//     let  smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
//     let count = 0;

//     for (var i=0; i<arr.length; i++){
//     for (var j=0; j<smileys.length; j++){
//         if (arr[i]===smileys[j]){
//         count++;
//         }
//     }
//     }
//     return count;
// }

// console.log(func([';]', ':]', ';)', ':$', 'D'] ));




// let func = (str) => {
//     let en = 'english';
//     if(str.toLowerCase().includes(en)){
//         return true
//     }else{
//         return false
//     }

//     or


//     // return /english/i.test(s)
// }

// console.log(func('abcEnglishdef'));




// let func = (str) => {
//     return str
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(' ');
// };

// console.log(func("How can mirrors be real if our eyes aren't real"));





// let func = (str) => {
//     let words = str.split(' '); // Разделяем строку на массив слов
//     for (let i = 0; i < words.length; i++) { // Проходим по каждому слову
//         // Преобразуем первую букву в заглавную, а остальную часть оставляем без изменений
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' '); // Склеиваем слова обратно в строку
// };

// console.log(func("How can mirrors be real if our eyes aren't real"));



// String.prototype.toJadenCase = function () {
//     return this
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(' ');
// };

// // Пример использования:
// const str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase()); 




// let func = (strs) => {
//     let acc = 0
//      strs.map((el)=>{
//         if(el.slice(0,2) === 'fl'){
//             acc++

//         }
       
        
//         // console.log(el.slice(0,3) );
        
//     },0)
//     if(acc === 3){
//         return 'fl'
//     }else{
//         return ''
//     }
// }

// console.log(func(['flyoih','fower','flsamf']));




// let func = (arr1,arr2) => {
//     let r = [...arr1,...arr2]
//     return r.sort((a,b)=>a-b)
// }

// console.log(func([1,2,4],[1,3,4]));





// let func = (a,b) =>{
//     for (let i = 0; i < b.length; i++) {
//         return a.filter((el)=>{
//             if (el === b[i]) {
//                 return el = ''
//             }else{
//                 return el
//             }
//         })
//     }
    
// }

// console.log(func([1,2,3], [1,2]));





// let func = (a,b) => {
//     return a.filter(el => !b.includes(el));
// }
// console.log(func([1,2,3],[1,2]));



// let groupElements = (arr) => {
//     return arr.reduce((acc, val) => {
//         if (!acc[val]) { 
//             acc[val] = [];
//         }
//         acc[val].push(val); 
//         return acc;
//     }, []);

    
// }

// console.log(groupElements([1,2,3,4,1,1,2])); 





// let func = (arr,n) => {
//     const itemCounts = new Map(); // Словарь для подсчёта встречаемости элементов
//     const result = []; // Результатирующий массив

//     for (const item of arr) {
//         const count = itemCounts.get(item) || 0; // Получаем текущее количество или 0, если элемент встретился впервые
//         if (count < n) { // Если количество встреч меньше заданного n
//             result.push(item); // Добавляем элемент в результат
//             itemCounts.set(item, count + 1); // Увеличиваем счётчик для этого элемента
//         }
//     }

//     return result;
// }

// console.log(func([1,1,1,2,3,2,3,3,3],2));
