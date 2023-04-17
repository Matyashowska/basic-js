const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
//   let newArr = [];
//   if(Array.isArray(arr)) {
//     //console.log(arr);
//     for(let i=0; i<arr.length; i++) {
//       //console.log(number);
//       if(arr[i] === '--double-next' && arr[i+1]) {
//         newArr.push(arr[i+1]);
//       } else if(arr[i] === '--double-next' && arr[i] === arr[arr.length-1]) {
//         newArr= newArr; 
//       }
// //         newArr.push(arr[i+1]);
//        else if(arr[i] === '--discard-prev') {
//           newArr.pop();
//       } else if(arr[i-1] === '--discard-next') {
//          newArr.pop();
//       } else if(arr[i] === '--discard-next' && arr[i] === arr[arr.length-1]) {
//         newArr= newArr;
//       } else if(arr[i] === '--double-prev' && arr[i-1]) {
//         newArr.push(arr[i-1]);
//       } else if(arr[i] === '--double-prev') {
//         newArr= newArr;
//       } else {
//          newArr.push(arr[i]);
//       }
//     }
//   } else {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
  
//   console.log(newArr);
//   return newArr;

  let newArr = [];
  if(Array.isArray(arr)) {
    //console.log(arr);
    for(let i=0; i<arr.length; i++) {
      //console.log(number);
      if(arr[i] === '--double-next' && arr[i+1]) {
        console.log('i was here');
        newArr.push(arr[i+1]);
      } else if(arr[i] === '--double-next' && arr[i] === arr[arr.length-1]) {
        console.log('i was here 1');
        newArr= newArr; 
      } 
      
//         newArr.push(arr[i+1]);
       else if(arr[i] === '--discard-prev' && newArr[newArr.length-1] === arr[i-1]) {
         console.log('i was here 2');
          newArr.pop();
      } else if(arr[i] === '--discard-next' && arr[i+1]) {
        console.log('i was here 4');
         newArr.splice(newArr.lastIndexOf(arr[i+1]), 1);
         //newArr.pop();
      } else if(arr[i] === '--discard-next' && arr[i] === arr[arr.length-1]) {
        console.log('i was here 5');
        newArr= newArr;
      }else if(arr[i] === '--double-prev' && arr[i-1]) {
        console.log('i was here 6');
        newArr.push(arr[i-1]);
      } else if(arr[i] === '--double-prev') {
        console.log('i was here 7');
        newArr= newArr;
      } else {
         newArr.push(arr[i]);
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  console.log(newArr);
  return newArr;
}

module.exports = {
  transform
};
