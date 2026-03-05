const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const confirmError = document.getElementById("confirmError");

  // Reset lỗi
  emailError.textContent = "";
  passError.textContent = "";
  confirmError.textContent = "";

  let isValid = true;

  // Email validation
  if (!email.includes("@")) {
    emailError.textContent = "Email không hợp lệ";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    passError.textContent = "Mật khẩu phải >= 6 ký tự";
    isValid = false;
  }

  // Confirm validation
  if (password !== confirm) {
    confirmError.textContent = "Mật khẩu không khớp";
    isValid = false;
  }

  if (!isValid) return;

  // Nếu hợp lệ thì gọi API
  await fetchUsers();
});
const displayUsers = (users) => {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach(({ name, email }) => {
    userList.innerHTML += `<p>${name} - ${email}</p>`;
  });
};

// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   displayUsers(data);
// };
const fetchUsers=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();
  displayUsers(data);
}
//arrow function
const sumArray = (arr) => {
  return arr.reduce((sum, value) => sum + value, 0);
};

// Ví dụ
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

const btn=document.getElementById("btn");
const text=document.getElementById("text");
btn.addEventListener("click",()=>{
    text.innerText="Hello openlad";
});
async function fetchData(){
const res=await fetch("https://jsonplaceholder.typicode.com/users");
const data= await res.json();
  data.forEach(user=>{
    console.log(user.name);
  });

}
async function getUsers() {
  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();
  console.log(data);
}
const Sumarr=(arr)=>{
  return arr.reduce((sum,value)=>sum+value,0);
}
const sum=[1,2,3,4,5];
console.log(Sumarr(sum));