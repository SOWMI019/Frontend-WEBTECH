let year=2024

if (year%100==0){
    console.log("it is century year")
    if(year%400 ==0){
        console.log("it is leap year");
         }
    
    else{
        console.log("it is not leap  year")

    }
}
else{
    console.log("it is not a century year");
    
    if(year % 4 ==0){
    console.log("it is leap year");
    }
    else{
        console.log("it is not leap year");
        
    }
}
    