// document.write(
//     2+3==6 ? "yess this is correct":"no this is worng"
// )



// alert("this is an alert")

// prompt("please enter ur name")
//confirm("Are u sure?");




// global scope
// var cricket = "virat";
// let tennis = "saina";
// const ground = "stadium"
// function sports(){
//     document.write(cricket)
// }
// sports()

// function scope
// function sports(){
//     var cricket = "virat";
//  let tennis = "saina";
//  const ground = "stadium";
//  document.write(cricket +"<br>");
//  document.write(tennis + "<br>");
//  document.write(ground);
 
// }
// sports()


// block Scope

// function sports(){

//     if(10<20){


//         var cricket = "virat" + "   ";
//           let tennis = "saina";
//           const ground = "stadium";    
//         document.write("gretest of all time" + "  ")
//         document.write(tennis)
//         document.write(ground)
//     }
//     document.write(cricket)
    
// }
// sports()
  

// function expression
// let a = function apple(){
//     document.write("this is function expression")
// }
// a()

// anonymous function
// var a=function(){
//     document.write("this is Anonymoys function")
// }
// a()


// function with parameters and return values
//  function score (a,b){
//          return a+b + "<br>"
//  }
//  function game(x,y){
 
//  document.write("i like "+ x +" and "+y)
//  }
//  game(" virat "," prabash")

// let collection = ["sai",33,true,{name:"ravi"}]

//   let mynumbers =[3,3,4,5,6,7,8]
//   let mynewnumbers=mynumbers.splice(0,5,"5,6,7,7,8")
//   document.write(mynumbers + "<br>")
//   document.write(mynewnumbers)

// let students=["sai","fsguaj","gasiuj","goij"]
// var newstudent = students.indexOf("satish")
// if(newstudent===-1){
//     students.push("satish")
// }



// loops
// for loop


// for(var a=100;a<=200;a++){
//     document.write("virat the goat" + "<br>")
// }


// while loop

// let a=0;
// while(a<=20){
//     document.write(a + ")"+"Hii friends"+"<br>")
//     a++
// }

// do while loop

// let x = 0;
// do{
//     document.write(x+")"+"this is saikumar"+"<br>")
//     x++
// }while(x<=20)


// var amount = 5000;
// var days=330;
// var intrest=1.5;
// for(let i=1;i<=days;i++){
//     if(i%1===0){
//         amount+=intrest
//     }
//     document.write("your amount for"+i+"th day"+amount+"<br>")
// }


// var a=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
// var b=[];
// var c=newset();
// for(var i=0;i<a.length;i++){
//     if(c.has(a[i])){
//         c.add(a[i]);
//         b.push(a[i]);
//         document.write(b)
//     }
// }

// var a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
// var uniqueArray = [];
// var uniqueSet = new Set();

// for (var i = 0; i < a.length; i++) {
//   if (!uniqueSet.has(a[i])) {
//     uniqueSet.add(a[i]);
//     uniqueArray.push(a[i]);
//   }
// }

// document.write(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



