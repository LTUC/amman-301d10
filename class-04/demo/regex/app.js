// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

let str = 'The rain in Spain falls Mainly in tRhe plain';

// VALIDATE : test() -> return boolean
// Find S letter in a string
// let regex1 =/S/g;
// let res1 = regex1.test(str);
// console.log(res1);

// let regex1 = /[A-Z][a-z][0-9]/g;
let regex1 = /\w/g;

// let res1 = regex1.test(str);
// console.log(res1);



//FIND : match() -> return array
// let regex2 = /in/g;
// console.log(str.match(regex2));

// let regex2 = /in\b/g;
// console.log((str.match(regex2)).length);

// to retrieve the ends of the words
// let wordEnding = /\W/g;
// console.log(str.match(wordEnding));



//REPLACE : replace() -> return string
// console.log(str.replace(wordEnding,'-'));



// we want to match all the words that begin with a capital letter
// let regex3 = /\b[A-Z]\w*/g;
// console.log(str.match(regex3));



let names = ['Razan Quran', 'Ali Ahmad', 'Zaid Quran', 'Mohammad Ccc', 'Bana Quran'];

// return a new array contains any name starts with letter (A-C) from the names array
//output: ['Ali Ahmad','Bana Quran']
// let res1 = regex1.test(str);


let reg4 = /^[A-C]/g;

let newArr = [];
names.forEach(item=>{
  if(reg4.test(item)) {
    newArr.push(item);
  }
})

console.log(newArr)



// choose the strings that ends with Quran word
//output: ['Razan Quran','Zaid Quran','Bana Quran']
// let reg4 = /Quran$/g;
