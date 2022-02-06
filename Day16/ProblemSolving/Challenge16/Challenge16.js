'use strict';


/* Combine methods */

/*-------------------------------------------------------------------------------------------------------
Challenge 01 

Write function called reverseString that take in string and return a reverse of this string .

Input <= "Hello";
Output => "olleH";
-------------------------------------------------------------------------------------------------------*/

const reverseString = (string) => {
    //write your code here ...
    return string.split("").reverse().join("");
}



/*-------------------------------------------------------------------------------------------------------
Challenge 02

Write function called detectFace that take in array of strings and return only strings that contain ^_^.

Ex :-
Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

-------------------------------------------------------------------------------------------------------*/

const detectFace = (arr) => {

    //write your code here ...
    
     return arr.filter(b=> b.includes('^_^'));
}


/*-------------------------------------------------------------------------------------------------------
Challenge 03

Write function called eveCharacter that take in string and return string contain only even characters.

Ex :-
Input <= "coding" output =>"cdn"
-------------------------------------------------------------------------------------------------------*/

const eveCharacter = (str) => {
    let a = str.split("");
    let b =[];
    for (let index = 0; index < str.length; index+=2) {
       b.push(a[index])
        
    }
   return b.join('')
   
}


/*-------------------------------------------------------------------------------------------------------
Optional: Challenge 04

Let use consider you are hired as software developer in tech company and you are assigned to work in restaurant web application project .

And you assigned to write function to return only gradients that contain chicken only.

Example of the array that you will returned the chicken gradients from :-

Input:
[["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];

Output:
[["grilled chicken"], ["baked chicken"], ["fried chicken"]];

-------------------------------------------------------------------------------------------------------*/

const chickenGradients = (arr) => {
}

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
