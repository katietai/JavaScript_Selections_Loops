console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let x = 1;
while(x <= 100){
    if (x% 2==0)
        continue;
    }
    console.log(x);
    x++;
 for(let x= 1; x<=100; x++){
     if( x % 2 == 1){
         console.log(x);
     }
 }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let x =1; x <= 100; x++){
    if( x% 3==0){
        console.log("Fizz");
    } else if ( x% 5 ==0){
        console.log("Buzz");
    } else if ( x% 3==0 && x % 5==0){
        console.log("FizzBuzz");
    }
}