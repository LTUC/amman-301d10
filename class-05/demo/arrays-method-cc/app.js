let testArray = ['301','students', 'are','the','best'];

// -------PUSH------ Add data to the end

// let x = testArray.push(' and 201 students');
// console.log(x);

// -------UNSHIFT------ Add data to the beginning
// let y = testArray.unshift('My ');
// console.log(y);

// -------SHIFT------ take off data from the beginning
// let z = testArray.shift();
// console.log(z);

// -------POP------ take off data from the end
// let c = testArray.pop();
// console.log(c);

// // ---------toString-------- convert array elements to one string
// let outputArray = testArray.toString();
// console.log(testArray)
// console.log(outputArray);

// // ---------JOIN-------- Convert the elements of an array into a string
// let outputArray2 = testArray.join(' ');
// console.log(outputArray2);

// // ---------SPLIT-------- Split a string into an array of substrings
// let testString = 'suffer my lovely students';
// let outputArray3 = testString.split(' ');
// console.log(testString);
// console.log(outputArray3);


let str = ['sherry','is','the','best'];
// ----------SLICE--------- select elements from the array (No change on the original array)
// let output = str.slice(1,3);
// console.log(str);
// console.log(output);

// // ----------SPLICE--------- Insert/Remove elements in the array (Alters the original array)
// let output = str.splice(1,2); // at position 1 remove 2 items
// console.log(str);
// console.log(output);

// let output = str.splice(2,2,'cute'); // at position 2 remove 2 items and add 1 items
// // let output = str.splice(2,0,'cute'); // at position 2 remove 0 items and add 1 items
// console.log(str);
// console.log(output);

// Concatenate arrays
// let str2 = ['.......'];
// let arr = str.concat(['and','cute'],str2);
// console.log(arr);

// Reverse array
let arr2 = str.reverse();
console.log(arr2);