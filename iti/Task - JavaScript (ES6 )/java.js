// let ele =document.querySelector(`div`);
// ele.addEventListener("click",function()
// {
//     ele.style.color ="red"
//     ele.style.backgroundColor="black";
//     ele.style.textAlign="center";
// })

// let user = {
//     name: "yousef sallam aied",
//     age: 19,
//     dapartment: "web",
//     son: {
//         name: "zain yousef sallam",
//         age: 0,
//         country: "cairo",
//     }
// };

// console.log(user);

// let {
//     name: userName,
//     age: userAge,
// } = user;

// console.log(`fullname : ${userName}, age : ${userAge}`);



// let x =[1 , 2 , 5 , 4];

// let result =x.map((z)=>{return z*2;})
// console.log( result);  




// 1- [ ] Array جديدة بنفس الطول
//2- - [ ] find()
//3- [ ] Array جديدة بالعناصر اللي حققت الشرط
//4- [ ] undefined
//- [ ] Arrays 

//--------------------------------------------------------
//false
//true
//true
//true
//false  



// const numbers = [1,2,3,4];

// numbers.forEach((num)=>{
//     console.log(num * 2);
// });


// const nums = [10,25,5,30,15,40];

// const result = nums.filter((num)=>{
//     return num > 20;
// });

// console.log(result);


// const users = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:28},
//     {name:"Omar", age:30}
// ];

// const user = users.find((item)=>{
//     return item.age > 25;
// });

// console.log(user);


// const names = ["ali","mona","ahmed"];

// const result = names.map((name)=>{
//     return name.toUpperCase();
// });

// console.log(result);


//  ----------------------------------------------------to do  part 4------------------//

// const fruits = ["Apple","Banana","Orange"];  // بتطبع الي داخل ال index  (value)

// // for (const element of fruits) {
// //     console.log(element);
    
// // }

// for (const key in  fruits) {   //بتطبع ال index (key)   //----diff just in and of ---//
//       console.log(key);
    
// }

// fruits.forEach((item ,index) => {     // for in+ for each
//      console.log(`${index} -> ${item}`) 
// });



//  ----------------------------------------------------to do  part 5------------------//



//  sum =(a,b)=>{
//     return a+b;
// }





// const user = {
//     name:"Mostafa",
//     age:25
// };
// // console.log(user.age);  // طريقه بلدي  

// const {name ,age} =user ;
// console.log(name);
// console.log(age);


// console.log(`Hello ${name}`);



// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3= [...arr1, ...arr2]; // arr1+arr2
// console.log(arr3);



//  ----------------------------------------------------to do  part 6------------------//


// const students = [
//     {name:"Ali", degree:70},
//     {name:"sallam", degree:95},
//     {name:"Ahmed", degree:40},
//     {name:"Mona", degree:85},
//     {name:"Omar", degree:55}
// ];

// const studentName=students.map((na )=>
// {
// return na.name;

// })
// console.log( studentName);



// const degree=students.filter((deg)=>
// {
// return deg.degree>=60;
// })
// console.log( degree);


// const search =students.find((se)=>
// {
// return se.degree>90;
// })

// console.log( search);

// students.forEach((name1) => {
//     console.log(name1.name);
// });






// const numbers = [5, 10, 15, 20];

// const total = numbers.reduce((sum, current) => {
//     return sum + current;
// }, 0);

// console.log(total);


