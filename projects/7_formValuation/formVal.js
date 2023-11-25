const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  validateInputs();
  username.value = "";
  email.value = "";
  password.value = "";
  confirmpassword.value = "";
});

function validateInputs() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpassword = document
    .getElementById("confirmpassword")
    .value.trim();
  let validationDone = 1;

  // Validate username
  if (username === "") {
    document.querySelector(".usererror").innerHTML = "Username is required";
    validationDone = 0;
  } else {
    document.querySelector(".usererror").innerHTML = "";
    validationDone = 1;
  }

  // Validate email
  if (email === "") {
    document.querySelector(".mailerror").innerHTML = "Email is required";
    validationDone = 0;
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    document.querySelector(".mailerror").innerHTML = "Invalid email format";
    validationDone = 0;
  } else {
    document.querySelector(".mailerror").innerHTML = "";
    validationDone = 1;
  }

  // Validate password
  if (password === "") {
    document.querySelector(".passerror").innerHTML = "Password is required";
    validationDone = 0;
  } else if (password.length < 8) {
    document.querySelector(".passerror").innerHTML =
      "Password must contain at least 8 characters";
    validationDone = 0;
  } else if (!/[A-Z]/g.test(password)) {
    document.querySelector(".passerror").innerHTML =
      "Password must contain at least one capital letter";
    validationDone = 0;
  } else if (!/[0-9]/g.test(password)) {
    document.querySelector(".passerror").innerHTML =
      "Password must contain at least one digit";
    validationDone = 0;
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':,.\/<>?]/g.test(password)) {
    document.querySelector(".passerror").innerHTML =
      "Password must contain at least one special character";
    validationDone = 0;
  } else {
    document.querySelector(".passerror").innerHTML = "";
    validationDone = 1;
  }

  // Validate confirm password
  if (confirmpassword === "") {
    document.querySelector(".checkpasserror").innerHTML =
      "Password confirmation is required";
    validationDone = 0;
  } else if (confirmpassword !== password) {
    document.querySelector(".checkpasserror").innerHTML =
      "Passwords must match";
    validationDone = 0;
  } else {
    document.querySelector(".checkpasserror").innerHTML = "";
    validationDone = 1;
  }

  //Result
  if (validationDone) {
    alert("Registration successful!");
  } else {
    alert("Please check the error messages and try again.");
  }
}
