// async function testget() {
//     const res=await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data=await res.json();
// console.log(data.map(item=>item.title));
// }
// async function testPost(){
//   const res=  await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             title:"test title",
//             body:"hao test body",
//             userId:29
//         })
//  });
//     console.log(await res.json());
// }
// testPost();
// async function testPut(){
//     const res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method:"PUT",

//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({
//             title:"updated title"
//         })
//     });
//     console.log(await res.json());
// }
// testPut();
// async function testDelete(){
//     const res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method:"DELETE"
//     });
//     console.log(res.json());
// }
// testDelete();
const numbers = [1, 2, 3, 4, 5];
const sumArray=(arr)=>{
    return arr.map(num=>num*2);
}
console.log(sumArray(numbers));
//2
const numbers2=[10,20,30,40,50];
const sumArray2=(arr)=>{
    return arr.filter(num=>num>25);
}
//3
console.log(sumArray2(numbers2));
async function getData(){
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data);
}
getData();
//4
async function getNames(){
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    const names=data.filter(user=>user.id>5).map(user=>user.name);
    console.log(names);
}
getNames();
const btn=document.getElementById("btn");
const text=document.getElementById("text");
btn.addEventListener("click",async()=>{
   const res=await fetch("https://jsonplaceholder.typicode.com/users");
   const data=await res.json();
   data.forEach(element => {
       const p=document.createElement("p");
       p.textContent=element.name;
       text.appendChild(p);
   });
});