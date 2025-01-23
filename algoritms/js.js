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
//       if (array[i] === target) {
//         r.push(i); 
//       }
//     }
//     if(r.length === 1){
//         return r[0]
//     }
//     return r
//   }
//   console.log(func([112,3,44,4,4,4,4,5,5],4));
// ==============
// Линейный поиск  

// Выполненная задача:Нужно найти и вывести индекс элемента,если их много то в массиве 





let func = (array) => {
    const seen = {};
  const unique = [];
  for (const element of array) {
    if (!seen[element]) {
      unique.push(element);
      seen[element] = true;
    }
  }
  return unique;
}

console.log(func([1,2,1,3,4,2]));
