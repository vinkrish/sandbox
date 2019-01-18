//Global vs. Local Variable
var num = 10 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num) 
} 
console.log("value of num outside test() "+num) 
test()

//The Let and Block Scope
function test2() { 
   var num2 = 100 
   console.log("value of num2 in test2() "+num2) { 
      console.log("Inner Block begins") 
      let num2 = 200 
      console.log("value of num2 : "+num2)  
   } 
} 
test2()
