document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const errorElement = document.getElementById("error");
  const dataTable = document.getElementById("dataTable");

  if (usernameInput === "onemax123" && passwordInput === "admin#1234") {
    errorElement.textContent = "";
    document.querySelector(".login-container").style.display = "none";
    dataTable.style.display = "block";
  } else {
    errorElement.textContent = "Password Invalid";
  }
});
