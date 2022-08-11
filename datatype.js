// Data Types




// Numbers
let x2 = 34;
let x3 = 3.14;
console.log(x2 , x3)

//strings
let name = "x";
let name2 = 'y';
let answer1 = "It's alright";          
let answer2 = "He is called 'Jon'"; 
console.log(name ,name2 , answer1 , answer2  )

//Booleans

let x = 5;
let y = 5;
let z = 6;
console.log(x==y , x==z)


// // Arrays

// const Languages = ["JS","PYTHON","REACT"];
// console.log(Languages [0])



// // Object
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue",
//     text:"hellow my name is majd"
// };
// console.log(person.text)

  //typeof

x = "text " 
y = ["John ", "Doe"  ]
z = 22;
a=3e5
console.log(typeof(a))


// literals template (back tics)


let text =
    
    `The quick
    "brown fox"
    jumps over
    'the lazy dog'`;

    console.log(text)




// ..............10/8................

    // Arrays

const Languages = ["JS","PYTHON","REACT"];
console.log(Languages [0])



// Object
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue",
    text:"hello my name is majd"
};
console.log(person.text)

//Arithmetic operators
x=5+10;
y=10-5;
z=2*5;
a=5/2;
b=5%2;
c=5;
c++;
d=5;
d--;
e=5**2;
console.log(x)
console.log(y)
console.log(z)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)



// Logical operators

console.log(x < 10 && y > 1) ;
console.log(x < 10 || y > 1);
console.log (!x > y);


//functions


function myFunc(theObject) {
  theObject.make = 'Toyota';
  console.log(theObject.make)
}

const mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};


console.log(mycar.make)

myFunc(mycar);


//time&date



const d2 = new Date();

console.log(d2)

let time = d2.getTime();
console.log(time)


console.log( d2.getDay() , d2.getMonth() ,d2.getFullYear() );




function double(x1){
 y2= x1*2;
console.log(y2);

}
double(5);







