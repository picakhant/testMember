const profileEmail = document.getElementById("profile-email");
const profileName = document.getElementById("profile-name");

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);

profileName.textContent = userInfo.name;
profileEmail.textContent = userInfo.email;

//log out
const userLogOutBtn = document.getElementById("user-logout");

userLogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.location.href = "./login.html";
});
