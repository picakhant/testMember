const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("user-email");
const passwordInput = document.getElementById("user-password");
const matchPasswordInput = document.getElementById("confrim-password");

//submit btn
const submitBtn = document.getElementById("submit");

//error handle alert
const errorAlert = document.getElementById("error-handle-alert");
const closeErrorAlert = document.getElementById("close-error-handle-alert");

//when user close error handler page will refresh
closeErrorAlert.addEventListener("click", () => {
  window.location.reload();
});

// email validation
const emailValidation = (email) => {
  // Regular expression pattern for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const errorHandlerOnSubmit = (e, message) => {
  e.preventDefault();
  // show error
  errorAlert.classList.remove("d-none");
  // create error message
  const errorMessage = document.createElement("strong");

  errorMessage.textContent = message;
  errorAlert.appendChild(errorMessage);
};

submitBtn.addEventListener("click", (e) => {
  //check general field
  if (
    emailInput.value === "" ||
    nameInput.value === "" ||
    passwordInput.value === "" ||
    matchPasswordInput.value === ""
  ) {
    errorHandlerOnSubmit(e, "Fill All Fileld!");
    return;
  }

  if (nameInput.value.length <= 3) {
    errorHandlerOnSubmit(e, "Name should be more than 3 character!");
    return;
  }

  //check mail
  const isValid = emailValidation(emailInput.value);
  if (!isValid) {
    errorHandlerOnSubmit(e, "Email is not correct!");
    return;
  }

  const isStrongPassword = passwordInput.value.length;
  console.log(isStrongPassword);
  if (isStrongPassword < 6) {
    errorHandlerOnSubmit(e, "Password should above 6 charcters!");
    return;
  }

  if (passwordInput.value !== matchPasswordInput.value) {
    errorHandlerOnSubmit(e, "Password doesn't match!");
    return;
  }

  //   keep user info in localStorage
  const userInfo = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  const userInfoJSON = JSON.stringify(userInfo);
  localStorage.setItem("userInfo", userInfoJSON);

  return true;
});
