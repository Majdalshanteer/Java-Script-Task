


//.........................................task ONE

function tellFortune(b, z, y, x) {
    return " you will ba a " + b + " in " + z + ", and married to " + y + " with " + x + " kids";

}
console.log(tellFortune("web developer", "Jordan", "Alice", 2));





//........................................Task TWO
function calculateDogAge(age) {

    return "Your doggie is " + age * 7 + " years old in dog years!"
}
console.log(calculateDogAge(2));


//......................................Task  THREE

function calculateSupply(age, amountPerDay){
    toMaxAge=100-age;
    return "You will need "+ toMaxAge*amountPerDay*365 + " to last you until the ripe old age of 100"
}
console.log(calculateSupply( 30,3))


//.......................................Task four

function greet(name){
    return "Hello " + name ;

}
console.log(greet("Adam"))



/*
....................................................5
what is the error:
function double(cat) {
  return 2 * x;
}
x is undefined


function double(7) {
  return 2 * 7;
}

all are constant values

function double('7') {
  return 2 * 'x';
}
function parameter is string & we can't multipy number by string

*/


/*
.................................................6
fix these functions:


func double1(x {
  return 2 * x ;
}*/
 function double1(x){
    return 2*x;
 }
 console.log(double1(8))

// functiondouble2 x)
// return 2 * x;
// }
function double2(x){
    return 2*x;
}
console.log(double2(5))

// function (x) double3 {
//   return 2 * x;

function double3(x){
    return 2*x;
}
console.log(double3(3))


//....................................................7

function  cube(par1){
    return par1**3
}
console.log(cube(5))



//...................................................8

function  multiply(par1, par2){
    return par1*par2
}
console.log(multiply(2,5))



//..................................................9

function canIGetADrivingLicense(age){
if (age >=20){
    return "yes you can"
}
else{
    y=20-age;
    return "please come back after "+ y+ " years to get one"
}}
console.log(canIGetADrivingLicense(5))




//..........................................10

function sameLength(x1,x2){
    if(x1.length==x2.length){
        return "true"
    }
    else{
        return "false"
    }
}
console.log(sameLength("arabic", "English"))




//...................................11


function largerNubmer(x,y){
    if (x>=y){
        return x;
    }
    else{
        return y;
    }
}
console.log(largerNubmer(9,8))




//....................................12

 function smallerNubmer(x,y,z){
    if(x<y && x<z){
        return x
    }
    else if(y<x && y<z){
        return y
    }
    else{
        return z
    }
 }
 console.log(smallerNubmer(100,80,90))





//.................................13

function shorterString(a,b,c,d,e){
   if(a.length<=b.length && a.length<=c.length && a.length<=d.length && a.length<=e.length){
    return a
   }else if(b.length<=a.length && b.length<=c.length && b.length<=d.length && b.length<=e.length){
    return b
   }else if(c.length<=b.length && c.length<=a.length && c.length<=d.length && c.length<=e.length){
    return c
   }else if(d.length<=b.length && d.length<=c.length && d.length<=a.length && d.length<=e.length){
    return d
   }else{
    return e
   }
}
console.log(shorterString("ai","be","majd","github","githu"))





//....................14

function longerString(a,b,c,d){
    if(a.length>=b.length && a.length>=c.length && a.length>=d.length ){
        return a
       }else if(b.length>=a.length && b.length>=c.length && b.length>=d.length ){
        return b
       }else if(c.length>=b.length && c.length>=a.length && c.length>=d.length ){
        return c
       }else{
        return d
       }
    }
    console.log(longerString("ai","be","majd","github","githuc"))





//.......................................15

function isEven(x){
    if(x % 2 == 0){
        return "true"
    }else{
        return "false"
    }
}
console.log(isEven(4))





//.........................................16

function isOdd(x){
    if(x % 2 !== 0){
        return "true"
    }else{
        return "false"
    }
}
console.log(isOdd(4))




//.............................................17
function positive(x){
    if(x >= 0){
        return x
    }else{
        return Math.abs(x)
    }
}
console.log(positive(-10))




//..............................................18

function fullName(firstName, lastName){
    return firstName+" " + lastName
}
console.log(fullName("alex", "mercer"))




//.................................................19

function average(one,two,three,four,five){
    return (one+two+three+four+five)/5
}
console.log(average(2,5,6,7,8))





//................................................20

function getRandomInt() {
    return Math.floor(Math.random() );

}
console.log(Math.random());




//..................................................21

function randomBetweenNumbers(min,max) {
   
    {   return Math.round((min - 0.5) + Math.random() * (max - min + 1)); };
  }
  
  console.log(randomBetweenNumbers(1,6));
 




//.....................................................22

function scoreInUniversty(grade){
    if ( grade>=95 && grade<=100){
        return "A"
    }else if(grade>=85 && grade<=94){
        return "B"
    }else if(grade>=70 && grade<=84){
        return "C"
    }else if(grade>=50 && grade<=69){
        return "D"
    }else{
        return "F"
    }
}
console.log(scoreInUniversty(95))



// function scoreInUniversty(grade){

// switch(grade){
// case  grade>=95 && grade<=100:
// console.log("A")
//     break;
// case grade>=85 && grade<=94:  
// console.log(scoreInUniversty("B")) 
// break;
// case grade>=70 && grade<=84:  
// console.log(scoreInUniversty("C") )
// break;
// case grade>=50 && grade<=69:  
// console.log(scoreInUniversty("D") )
// break;
// case grade>=0 && grade<=49:  
// console.log(scoreInUniversty("F"))


// }

// }

// console.log(scoreInUniversty(96))





//....................................................23


for (let i = 1; i < 5; i++) {
    console.log(i);
  }



i=0
  function counter(){
   return ++i
   
  }
  console.log (counter() ) 
  console.log (counter() ) 
  console.log (counter() ) 
  



//...................................................24


