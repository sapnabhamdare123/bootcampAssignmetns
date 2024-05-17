
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// let str = " this is javascript";
// console.log(str.toUpperCase());




// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]


// let str = ["java","python","c"]
// let output = []
// for(let i=0; i<str.length; i++){
//     if(str[i] == "javascript")
//     {
//         output[i]="true";
//     }
//     else{
//         output[i]="false";
//     }
// }
// console.log(output);




// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true



// let temp = 0;
// let str = "puran@gmail.com";
// for(let i=0; i<str.length; i++){
//     if(str[i] == "."){
//         temp = 1;
//     }  
// }

// if(temp == 1){
//     console.log("true");
// }
// else{
//     console.log("false");
// }




// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i


// let str = "i am learning javascript";
// let a  = str.split("").reverse().join("");
// console.log(a);







// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success


// let str = "Success comes to those who work hard";
// let arr = str.split(" ");
// arr.reverse();
// let reversestring = arr.join(" ");
// console.log(reversestring);








// Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true


// let str = "below";
// let str2 = "elbow";
// let arr = [];
// let arr2 = [];
// for(let i=0; i<str.length; i++){
//     arr[i] = str[i];
//     arr2[i] = str2[i];
// }

// console.log(arr);
// console.log(arr2);

// arr.sort(function (x,y){
//     return x - y;
// })
// console.log(arr);


// arr2.sort(function (a,b){
//     return a - b;
// })
// console.log(arr2);




// home work :- Regex 