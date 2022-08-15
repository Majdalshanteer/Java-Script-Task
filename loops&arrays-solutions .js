
//...............  1   .........


//  [ 1 , 7 , 9 , 45 ]

//  ["Str" , "alex" , "moh" ]

//  ['the','fox' , 'over' , 'lazy' , 'dog'  ]


//...............  2  .........



// Banana          1
// Tomato          0


//...............  3   .........


let myFavoriteFood = ["rice", "meats", "fish", "chicken", "vegitabeles"];
console.log(myFavoriteFood);

let myFavoriteSport = ["swimming", "walking", "skating"];
console.log(myFavoriteSport);

let myFavoriteMovie = ["comedy", "action", "drama", "adventure"];
console.log(myFavoriteMovie);



//...............  4   .........

function firstOfArray(array) {
  let first = array.shift();
 console.log(first)
}
firstOfArray(["t", "u", "g", "x"]);

//...............  5   .........


function lastOfArray(array) {
  let last = array.pop();
  return last;
}
console.log(lastOfArray(["t", "u", "g", "x"]));


//...............  6   .........

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10)
console.log(array);

//...............  7   .........

var array = [0, 5, 7, 9];
array.shift();
array.push(3.5)
console.log(array);




//...............  8   .........

function middleOfArray(array){
    if (array.length % 2 !== 0) {
        console.log(array[(array.length - 1) / 2]);
      } else {
        console.log(array[array.length / 2 - 1], array[array.length / 2]);
      }

}
middleOfArray(["t","u","g","x"])





//...............  9   .........


let animals=[];

animals[0]="cat";
animals[1]="ele";
animals[2]="bird";

console.log(animals);

animals[0]="zebra";
animals[1]="elephant";
animals[2]=" ";

console.log(animals);





//...............  10   .........


function indexOfArray(arr,index){
    console.log( arr[index]);
    
}
indexOfArray([1,2,3,8,9],4)


//...............  11   .........


function arrayExceptLast(array){
    array.pop();
    console.log(array);
}
arrayExceptLast([1,2,3,8,9])



//...............  12   .........


function addToEnd(array,x){
    array.push(x);
    console.log(array);
}
addToEnd([1,2,3,8,9],55)



// ..............................all the exercises below should solved 2 times: 1- for loop 2- while lopp......................................


//...............  13   .........


//  for

    let sum= 0
function sumArray(array){

    for (let i=0; i < array.length; i++) {
      
      sum += array[i];

    }
    console.log(sum);
}
sumArray( [1,2,3,8,9])

//while
//  i=0
// sum=0
// function sumArray(array){
// while(i < array.length){
//     sum += array[i];
//     i+=1
// }
// console.log(sum);

// }sumArray( [1,2,3,8,9])




//...............  14   .........

//  for

function minInArray(array){
    for(let i=0; i < array.length; i++){
        var m = Math.min(...array);
    }
    console.log(m)
}
minInArray([1,2,3,8,9])


//while

//  i= 0;
// function minInArray(array){
//     while(i < array.length){
//         var m = Math.min(...array);
//         i+=1

//     }
//     console.log(m)
// }
// minInArray([5,2,3,8,9])


//...............  15   .........

//  for 

//first

removeArray=[];
function removeFromArray(array,y){
    for(let i=0; i < array.length; i++){
        if (array[i]===y){
           continue; 
           
}removeArray.push(array[i])
      
      
  }
  console.log(removeArray) ;
}
removeFromArray([1,2,3,8,9],8)

//second

// function removeFromArray(array,y){
//     for(let i=0; i < array.length; i++){
//         if(array[i]===y){
//         array.splice(i,1);}
//     }
//     return array;
// }
// console.log(removeFromArray([1,2,3,8,9],8))

//while

// i=0
// function removeFromArray(array,y){
//     while(i < array.length){
//         if(array[i]===y){
//         array.splice(i,1);}
//         i+=1
//         }
//         console.log(array)
//     }
//     removeFromArray([1,2,3,8,9],8)



//...............  16   .........

//for

let onlyOdd=[];
function oddArray(array){
    for(let i=0; i < array.length; i++){
        if (array[i]%2 !==0 ){
        onlyOdd.push(array[i]);
        }
    }
  console.log(onlyOdd) 
}
oddArray([1,2,3,8,9,11])

//while

// i=0;
// onlyOdd=[];
// function oddArray(array){
// while(i < array.length){
//     if (array[i]%2 !==0 ){
//         onlyOdd.push(array[i]);
//         }
//         i++

// }
// console.log(onlyOdd);
// }
// oddArray([1,2,3,8,9])



//...............  17   .........

//for


sum=0
function aveArray(array){

    for(i=0 ; i<array.length ; i++){
        sum= (sum+array[i])
        avg =sum/array.length
        
    }
    console.log(avg)
}
aveArray([1,2,3,8,9])


//while

// sum=0
// i=0
// function aveArray(array){
//     while(i<array.length){
//         sum= (sum+array[i])
//         avg =sum/array.length 
//         i++
//     }
  
//     console.log(avg)
// }
// aveArray([1,2,3,8,9,77])




//...............  18   .........
//for

function shorterInArray(array){
    shorter=array[0];
    for(i=0 ; i<array.length ; i++){
       if(array[i].length < shorter.length){
        shorter = array[i];
       }
   
}console.log(`"${shorter}"`)
}
shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala" ])


//while

// i=0
// function shorterInArray(array){shorter=array[0];
//     while(i<array.length){
//         if(array[i].length < shorter.length){
//             shorter = array[i];
//            }
//            i++
//     }console.log(`"${shorter}"`)

// }
// shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala" ])




//...............  19   .........

//for

// sum=0
// function repeatChar(string,char){
//     for(i=0 ; i<string.length ; i++){
//         if (string[i]===char )
//         sum++
// }
// console.log(sum)
// }
// repeatChar("alex mercer madrasa rashed2 emad hala" , "r")
 
//while
sum=0
i=0
function repeatChar(string,char){
    while(i<string.length){
        if (string[i]===char )
        sum++ 

        i++
    }
    console.log(sum)
}
repeatChar("alex mercer madrasa rashed2 emad hala" , "a")



//...............  20   .........

// function evenIndexOddLength(array){
//     for(i=0 ; i<array.length ; i++){
//         if(( array[i].length % 2 !==0) &&( i % 2 == 0) ){

//             oddLengthEvenIndex.push(array[i]);
//         }
//     }
//     console.log(oddLengthEvenIndex)
// }
// evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]);




oddLengthEvenIndex=[];
i=0
function evenIndexOddLength(array){
    while(i<array.length){
        if(( array[i].length % 2 !==0) &&( i % 2 == 0) ){

            oddLengthEvenIndex.push(array[i]);
        }
        i++
    }
    console.log(oddLengthEvenIndex)
}
evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]);


//...............  21   .........

// function powerElementIndex(array){
//     for(i=0 ; i<array.length ; i++){
//        array[i]= array[i]**i

//     }
// console.log(array)
// }
// powerElementIndex([44, 5, 4, 3, 2, 10]);

i=0
function powerElementIndex(array){
    while( i<array.length){
            array[i]= array[i]**i
            i++
    }
    console.log(array)
}
powerElementIndex([44, 5, 4, 3, 2, 10]);


//...............  22   .........

// newArray=[];
// function evenNumberEvenIndex(array){
//     for(i=0 ; i<array.length ; i++){
//         if(( array[i] % 2 ==0) &&( i % 2 == 0) ){
//             newArray.push(array[i])
//         } 
//     }
// console.log(newArray);
// }
// evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]);

i=0
newArray=[];
function evenNumberEvenIndex(array){
    while( i<array.length){
        if(( array[i] % 2 ==0) &&( i % 2 == 0) ){
            newArray.push(array[i])
        } 
        i++
}
console.log(newArray);
}
evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]);





// .............................................  While Exercises .......................................................


// 1
// Create a function called subtract
// that takes a single parameter n,
// and return the subtraction of all
// starting from n to 0
// Ex: subtract(2); => 2 - 1 - 0 => 1
// Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
// Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
// */

i=0
sum=0
function subtract(n){

    while(  i<n  ){ 
        
       sum=sum+i ;
       x= n-sum
    
     
 i++
   
    }
    console.log(x)
}
subtract(5)


/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
i=1
multi=1
function factorial(n){

    while(i<n ){
       multi = multi * i 
       y= n*multi
        i++
    }
    console.log(y)
}
factorial(4)



/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
i=0

function repeatStr(string, number){
    while(i<=number){
     x= string.repeat(number )
    
        i++

    }
 console.log(`"${x}"`);
}
repeatStr("to",4  );


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/


sum=0
function total(x ,y){
    i=x
    while(i <= y){
       sum+= i
       i++
    }
    console.log(sum)
}
total(3, 6);

/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(x,y,z){
        d=x*(y**z)
    console.log(d)
}
multiOf(4,10,3);


/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
result=1
function multi2(x,y){
    i=x;
    while(i<= y){
        result=result*i
        i++

    }
    console.log(result)
}
multi2(3,6);

/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
text=("")

function numberBetweenUs(x,y){
    i=x+1;
    while(i<y){
text= (`${text+i}, `)
   
        i++ 

    }
 console.log(`" ${text}"`)
}
numberBetweenUs(2,8)

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

function countDown(x){
    i=1
    arr=[];
    while(i<= x){
   arr.unshift(` ${i }`)
   
      i++
      
    }console.log(`"${ arr }, done"`)
}
countDown(7)



//......................................................  For Exercises   ...........................................................

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
newArray=[];
function doubleValues(array){
    for(i=0;i<array.length; i++){
        
        newArray.push(array[i]*2)
        
    }
    
console.log(newArray)

}
doubleValues([5,1,2,3,10]);


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
onlyEven=[];
function onlyEvenValues(array){
    for(i=0;i<array.length; i++){
        if (array[i]%2 == 0 ){
            onlyEven.push(array[i])
        }
        
    }
    console.log(onlyEven)
}
onlyEvenValues([5,1,2,3,10]);


/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
firstAndLast=[];
function showFirstAndLast(array){
    for(i=0;i<array.length; i++){
        firstAndLast.push( array[i].charAt(0).concat( array[i].charAt(array[i].length-1)))
        
    }
    console.log(firstAndLast)
   

}
showFirstAndLast(['colt','matt', 'tim', 'udemy'])



/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(arr, key, value) {
      for (i = 0; i < arr.length; i++) {
        obj = arr[i];
        obj[key] = value;
      }
      return arr;
    }
    
    console.log(
      addKeyAndValue(
        [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
        "title",
        "instructor"
      )
    );

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

 function vowel_count(str1) {
      var vowel_list = "aeiouAEIOU";
    
      var object = {};
    
      for (var i = 0; i < str1.length; i++) {
        if (vowel_list.indexOf(str1[i]) !== -1) {
    
           
            if(object[str1[i]]== undefined) 
            {object[str1[i]] = 1} 
    else{ object[str1[i]] ++};
         
    
        }
      }
    
     return object;
    
      }
    
    console.log("vowel_count", vowel_count("I Am awesome and so are you"));