const contaier = document.querySelector("#container");
const registerBtnToggel = document.querySelector("#register");
const logInBtnToggel = document.querySelector("#login");
const userNameInput = document.querySelector(".username");
const userEmailInput = document.querySelector(".email");
const userPassInput = document.querySelector(".pass");
const userEmail = document.querySelector(".emailData");
const userPass = document.querySelector(".passData");
const signUpForm = document.querySelector("#signUp");
const signInForm = document.querySelector("#signIn");
let users;
console.log(userEmail);
console.log(userPassInput);

localStorage.getItem("userInfo")
  ? (users = JSON.parse(localStorage.getItem("userInfo"))): (users = []);

signUpForm.addEventListener("click", () => {
  saveUsers();
});

signInForm.addEventListener("click", () => {
  validateData();
});

function validateData() {
  let flag = false;
  for (let i = 0; i < users.length; i++) 
  {
    if (users[i].userEmail === userEmail.value && users[i].userPassword === userPass.value )
    {
      flag = true;
      break;
    } 

}

if (flag) 
{
   console.log("your data is correct") ;
}
else console.log("your data is wrong")

}


function saveUsers() {
  let signUpflag = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userEmail === userEmailInput.value) {
      signUpflag = true;
      break;
    }
  }
  if (signUpflag === true) {
    alert("This email is already registered.");
  } else {
    const user = {
      username: userNameInput.value,
      userEmail: userEmailInput.value,
      userPassword: userPassInput.value,
    };
    users.push(user);
    localStorage.setItem("userInfo", JSON.stringify(users));
    clearInputs();
    contaier.classList.remove("active");
  }
}

function clearInputs() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPassInput.value = null;
}

registerBtnToggel.addEventListener("click", () => {
  contaier.classList.add("active");
});
logInBtnToggel.addEventListener("click", () => {
  contaier.classList.remove("active");
});

const forms = document.querySelectorAll("form");
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}
