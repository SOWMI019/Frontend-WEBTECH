# JavaScript:
* it is one programming Language used to add funtionality in our webpage that is created by html and Css.
## How many Ways we can Write Js?
1. Internal Js
2. external Js

### Internal JavaScript
* it is the process of Writing the JS code inside the html file
* for these we need Script tag
* these tag should be written inside the <body> tag at the end

### External JavaScript
* it is the process of writing js code in separate js Script file
* js file ext will be '.js'
* after that js file we have to connect with html file by using <Script> tag


## Token
* tokens are the basic building blocks of any Programming Language

* tokens are categoried in 5 types
1.KeyWords
2.identifiers
3.Literals
4.Separators
5.Operators

### 1.KeyWords
* KeyWords are pre-defined words or reserved words which should be written in lower case
* KeyWords can not be used as identifiers
ex: if,else,for,while,let,var

### 2. Identifiers
* Any component where we can provide Name is called as identifiers

*METHODS/FUNCTION, Variable,Class

#### Rules
* we Cannot start with number but in between we can Provide
* Special Character we can give only '-' & '$'
* we can't give ny space in between
* KeyWords can not be used as identifiers


### Separators
* it is used to Separate the Statements
ex: ,(comma),:(semicolon),Space(),etc...

## Variable
 * Variable is container where we can store the data
 * in javascript for declaring the variable we need `var`,`let`,`const` keywords
 
 ### var keyWord
 * by using these `var` keyword we can declare ,initialize,re-initialize,`re-declare` the Variable.

 ### let keyWord
 * by using `let` keyWord we can perform declare ,initialize,re-initialize but we **cannot perform `re-declare`**
 ### const  keyWord
 *`const` keyWord is used to declare constant value,that we can't change through out in a program
 * here we can't perform re-declaration and re-initalizztion.
 * here **declaration and initalizztion should be done in same line**

 ```js
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

let ename; // Not possible

// ! const

const pi=3.14;

const pi// not possible
pi=5.6; // Not possible

 ```

 ## DataType
 * `DataType` is used to know what kind of data we want to Store in any variable
 * in js we have two types of DataType

 1.Primitive DataType
 2.non-primitive DataType

 ### How to check DataType in js?
 * to check the DataType of any variable we have to use **typeof** operator

 ## Primitive DataType
 
 #### 1.number DataType
 * in js both decimal and Non-decimal values are called as number
 ```js
 let a=10;
 let height=4.3

 console.log(typeof a)
  console.log(typeof height)
  ```
  #### 2.String DataType
  * String  is a collection of Single or multiple characters enclosed with Single quotes('')/ double quotes("")/ backtickets(``) 
  * by using backtickets we can take multiple Strings and we can do **String interpolation**
  ```js
  2.! String

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
  `
  #### What is String Interpolation/ Template Literals?
  * it is the process of accessing any value of variable inside the String 
  * for this we have to take the String by using backTicks and the Variable we will access that should be wrapped by using ${ }
  ```js
  let num1=10
 let num2=20
 let sum=10+20
console.log(`The addition of ${num1} and ${num2} is ${sum}`)
`
#### 3.boolean
* it can only accept true or false
#### 4.undefined
* any variable that is declared but not initialized  is called as undefined

* typeof undefined is **undefined**

```js
let wifeName;// undefined
console.log(typeof wifeName);
```
#### 5.null
* null is when the programmer intentionally assign the value as a null.
* **typeof null is object** 
```js
let phoneNumber=null
console.log(phoneNumber)
console.log(typeof phoneNumber);
```

#### bigint
* it is used to define one large integer number
* to make number as bigint we have to use `n` as Suffix
```js
let x=2n
console.log(typeof X); //bigint
```
## Non-primtive Datatype
* in js we have three types of non-primitive DataType
1.function
2.array
3.object

## Difference between == & ===?

* `==` checks only the value not the datatype but `===` checks both the values and datatype
```js
console.log(20=="20")// true
console.log(20==="20")// false
```


  












### Important Question to interview

1.let vs var vs const
2.how to check datatype
3.undefined vs null
4.template literals / String interpolation
5.Difference between == & ===?