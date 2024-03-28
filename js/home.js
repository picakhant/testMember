// alert when window load
window.addEventListener("load", () => {
  const userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    window.location.href = "../pages/login.html";
    return;
  }

  const alertBtn = document.getElementById("load-alert");
  alertBtn.click();
});
