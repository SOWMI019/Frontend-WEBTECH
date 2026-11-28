console.log("Variable in Javascript");

// ! 1. Var keyword

var sname; //v.d
sname="smith" // v.i
console.log(sname);

var age=13;// V.d & v.i
console.log(age);

age=15// r.i
console.log(age)



// ! 2.let keyword

let ename; // v.d
ename="miller" //v.i
console.log(ename);

let eid=101 // v.d & v.i
console.log(eid);

eid=201
console.log(eid);

//let ename;

console.log("DataType in JavaScript")

//Primitve DataType

// ! 1.number

 let sal=100000.9;
 let eage=21;

 console.log(sal)
 console.log(eage)

 console.log(typeof sal)
 console.log(typeof eage)

 console.log("------------------")

 // 2.! String

 let companyName="abc"
 console.log(companyName)
 console.log(typeof companyName)

 let gender='M'
 console.log(gender)
  console.log(typeof gender)

  let aboutemp =`She is very much confident girl`
  console.log(aboutemp) 
  console.log(typeof aboutemp);

  let x=`hi 
         hello`;
         console.log(x);//backtick used for multi-line initalizer

// ! String Interpolation / template Literals
// Accessing the variable inside the String

let num1=10
let num2=20
let sum=10+20
console.log(`The addition of ${num1} and ${num2} is ${sum}`)

// ! 3.Boolean

let isPlayer=false
let isMarried=true

console.log(isPlayer);
console.log(typeof isPlayer);

console.log(isMarried);

// ! 4 undefined
// Any variable which is declared but not initalized

let wifeName;// undefined
console.log(typeof wifeName);


// ! 5. null 
let phoneNumber=null
console.log(phoneNumber)
console.log(typeof phoneNumber); // Difference between undefined & null

// ! 6.bigint

let tooMuchSal=1234567890987654321n
console.log(tooMuchSal)

// ! Non-primitive DataType
// 1.Functions
// 2.array
// 3.Object

// ! const

const pi=3.14;






         


  








