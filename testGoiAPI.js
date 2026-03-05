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
async function testDelete(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"
    });
    console.log(res.json());
}
testDelete();