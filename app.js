//Declare and initialize an empty multidimensional array.
//(Array of arrays)

let num = [[],[],[]];

//Declare and initialize a multidimensional array
//representing the following matrix:

let matrixArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(matrixArray);

//Write a program to print numeric counting from 1 to 10.

for(let i = 1 ; i<= 10 ; i++){
    console.log(i);
}

//Write a program to print multiplication table of any
///number using for loop. Table number & length should be
//taken as an input from user.


let TableNumber = +prompt("Enter a Number for Multiplication Table");
let Tablelength = +prompt("Enter Table Lenght");

for(var i = 1; i <= Tablelength ; i++){
    console.log(TableNumber+ " x "+ i + " = " +TableNumber*i);
}

//Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]

let fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

for(let i=0; i<=4; i++){
    console.log(fruits[i]);
}

for(let i=0; i<=4; i++){
    console.log("fruits elements at index "+i+" is "+fruits[i]);
}

//Generate the following series in your browser. See
//example output.

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for(let i=1; i<=15; i++){
    document.write(i+",")
}
document.write("<br />");


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for(let i=10; i>=1; i--){
  document.write(i+",")
}
document.write("<br />");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
for(let i=1; i<=20; i++){
  if(i%2==0){
    document.write(i)
  }
  else{
    document.write(",")
  }
}
document.write("<br />");



// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for(let i=1; i<=20; i++){
    if(i%2==!0){
      document.write(i)
    }
    else{
      document.write(",")
    }
  }
  document.write("<br />");




// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for(let i=1; i<=20; i++){
    if(i%2==0){
      document.write(i+"k")
    }
    else{
      document.write(",")
    }
  }
  

  //Write a program to identify the smallest number in the
  //given array.


let A = [24, 53, 78, 91, 12];


let maxNumber = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i];
    }
}

console.log("The largest number in the array is:", maxNumber);   


//Write a program to print multiples of 5 ranging 1 to
100.
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

