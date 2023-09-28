const arr = [1,2,3,4,5];
// console.log(arr)

// let arr_Sq = [1,4,9,16,25];

// let arr_Sq = [];
// for(let i=0; i < arr.length; i++){
//     console.log(i, arr[i])
//     arr_Sq.push(arr[i]*arr[i]);
// }

// console.log(arr_Sq)

let arr_Sq = arr.map(a => a*a);
console.log(arr_Sq)