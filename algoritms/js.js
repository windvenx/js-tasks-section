// let func = (list1,list2) => {
    // let r = [...list1,...list2]
    // for(let j = r.length - 1;j > 0;j--){
    //     for(let i = 0;i < j;i++){
    //         if(r[i] == r[i + 1]){
    //             let temp = r[i];
    //             r[i] = r[i + 1]
    //             r[i + 1] = temp
    //         }
    //     }
    // }return r
// }

// console.log(func([1,2,4], [1,3,4]));
// =====================
// Пузырковая сортировка

// Выполненная задача:Нужно было обьеденить массив и отсортировать





// let func = (array) => {
//     let swapped;
//     do {
//       swapped = false;
//       for (let i = 1; i < array.length; i++) {
//         if (array[i - 1] > array[i]) {
//           [array[i - 1], array[i]] = [array[i], array[i - 1]]; // ES6 деструктурирующее присваивание
//           swapped = true;
//         }
//       }
//     } while (swapped);
//     return array;
//   }
//   console.log(func(1,4,2,3));
// ===================================
//Другой вариант Пузырковой сортировки 

// Выполненная задача:Сортировка массива




// let func = (array, target) => {
//     let r = []
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] !== target) {
//         r.push(array[i]); 
//       }
//     }
//     if(r.length === 1){
//         return r[0]
//     }
//     return r.length
//   }
//   console.log(func([3,2,2,3],3));
// ==============
// Линейный поиск  
// Выполняется за Линейное время ,по скорости O(n)

// Выполненная задача:Нужно найти и вывести индекс элемента,если их много то в массиве 





// let func = (array) => {
//     const seen = {};
//   const unique = [];
//   for (const element of array) {
//     if (!seen[element]) {
//       unique.push(element);
//       seen[element] = true;
//     }
//   }
//   return unique;
// }

// console.log(func([1,2,1,3,4,2]));
// ===================
// Удаление дубликатов






// let func = (arr,num) => {
//   let low = 0;
//   let high = arr.length - 1;
//   while(low <= high){
//     let mid = Math.floor((low + high) / 2);
//     let guess = arr[mid];
//     if(guess == num){
//       return mid
//     }
//     if(guess > num){
//       high = mid - 1
//     }else{
//       low = mid + 1
//     }
//   }
  
// }

// console.log(func([1,3,4,5,7],4));
// ================================================================
// Бинарный поиск(Этот вариант намного быстрее линейнего поиска)
// Выполняется за Логарифмическое время ,по скорости O(Log n)

// Выполненная задача:Нужно найти и вывести индекс элемента





// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// function middlePermutation(s) {
//     let sorted = s.split('').sort();
//     let result = '';
//     let midIndex = Math.floor(factorial(sorted.length) / 2) - 1;

//     while (sorted.length > 0) {
//         let n = sorted.length;
//         let fact = factorial(n - 1);
//         let index = Math.floor(midIndex / fact);
//         result += sorted[index];
//         sorted.splice(index, 1);
//         midIndex -= index * fact;
//     }

//     return result;
// }

// function middlePermutation(string) {
//     let s = string.split('')
//     if (s.length % 2 === 0) {
//         return s.splice(s.length / 2 - 1, 1) + s.reverse().join('');
//     } else {
//         return s.splice(Math.floor(s.length / 2), 1) + middlePermutation(s.join(''));
//     }
// }

// console.log(middlePermutation('ypofc')); 
// console.log(middlePermutation('gvsdnufklripjqc'));





// function factorial(n) {
//     if (n === 1) {
//         return n; 
//     } else {
//         return n * factorial(n - 1);    
//     }
// }
// console.log(factorial(5));



// напишите функцию в которую передан аргумент массив,она должна возврашать 
//  удвоенные элементы

