"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

// const array1 = {
//   "Romio Joliat": 35,
//   "Mario Ristrova": 39,
//   "Sofia firnando": 50,
// };

// for (const element in array1) {
// console.log( [`Customer Name :${element} , Age :${array1[element]}`]);
// }
// > Array ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", "Customer Name :Sofia firnando , Age :50"]

const customerAndAge = (obj) => {
  // write your code here

  let result = [];
  for (const element in obj){
    result.push(`Customer Name :${element} , Age :${obj[element]}`)
  }
  return result;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

// const object1 = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
// let result = [];
// for (const [key, value] of Object.entries(object1)) {
//   result.push(`${key}: ${value}`);
// }
// console.log(result);

const getEntries = (obj) => {
  // write your code here
  let result = [];
  for (const [key, value] of Object.entries(obj))
  result.push(`${key}: ${value}`);
  return result;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

// for(const key in courses){
//   coursesName.push(`${courses[key].course}`)
//     for(const key2 in courses[key].Students){
//       studentsName.push(`${courses[key].Students[key2]}`)

//     }}
// console.log( coursesName);
// console.log( studentsName.length);

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
  // write your code here
  for(const element1 in courses){
    coursesName.push(`${courses[element1].course}`)
      for(const element2 in courses[element1].Students){
        studentsName.push(`${courses[element1].Students[element2]}`)
  
      }}
  
  
  return { coursesName, studentsName };
};

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
  // write your code here
  let _course=[];
  let result=[];
  for (let i=0;i<courses.length;i++){
    let data =Object.values(courses[i]);
    
    let names =data[2];
    for(let j=0;j<arr.length;j++){
      for (let k=0;k<names.length;k++){
        if (arr[j]==names[k]){
          _course=data[0];
          result[j]={Student: arr[j] ,course:_course};  
        }
      }
    }


}
return result;
};

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};
