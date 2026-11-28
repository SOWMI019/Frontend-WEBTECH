
//! 1.Math.max();
console.log(Math.max(5,9,2,7));


//! 2.Math.min();// Can pass more than one number
console.log(Math.min(5,9,2,1,7));


//! 3.Math.Sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(16));
console.log(Math.sqrt(100));

//! 4.Math.Absolute
console.log(Math.abs(-78));
console.log(Math.abs(-8.5));

//! 5.Math.Power
console.log(Math.pow(5,3));
console.log(Math.pow(2,4));

//! 6.Math.floor
console.log(Math.floor(15.4)); // 15 // give exactly same number
console.log(Math.floor(50.1)); // 50
console.log(Math.floor(99.999));// 99

//! 7. Math.ceil()
console.log(Math.ceil(17.8)); // give next number
console.log(Math.ceil(16.9));

//! 8. Math.round()
console.log(Math.round(15.6))
console.log(Math.round(17.1))

//! 9. Math.rondam()
console.log(Math.random());

console.log("\t\t Generate the randome number btw 0 to 9");
console.log(Math.floor(Math.random()*10));

// start=20 , end=50
//Math.floor(Math.random() *(end - Start+1 + Start))
console.log("\t\t Generate the randome number btw 20 to 50");
console.log(Math.floor(Math.random()*31 + 20));

console.log("Generate one 4digit OTP9");

console.log(Math.floor(Math.random()*9000 + 1000));


console.log("\t\t Count Number");
let num=1234
let count=0;
while(num>0){
    count++
    num=Math.floor(num/=10)

}
console.log(count);

// Perfect Square
let Squ=15
if(Squ < 0){
    console.log("Number is not perfect Squre");
}
for(let number=1;i<15;i++){
    let Square=i*i;
   }

        
       
   
    

















