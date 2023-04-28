const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("submit-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  checkFirstName(firstNameValue);
  checkLastName(lastNameValue);
  checkEmail(emailValue);
  checkPassword(passwordValue);
}

function checkFirstName(firstNameValue) {
  firstNameValue === ""
    ? setErrorFor(firstName, "First Name cannot be blank")
    : firstNameValue.length < 3
    ? setErrorFor(firstName, "First Name must be at least 3 characters long")
    : setSuccessFor(firstName);
}

function checkLastName(lastNameValue) {
  if (lastNameValue.length < 3) {
    setErrorFor(lastName, "Last Name must be at least 3 characters long");
  } else {
    setSuccessFor(lastName);
  }
}

function checkEmail(emailValue) {
  if (!isEmailValid(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

function checkPassword(passwordValue) {
  if (passwordValue.length < 6) {
    setErrorFor(password, "Password must be at least 6 characters long");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "box error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "box succes";
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
