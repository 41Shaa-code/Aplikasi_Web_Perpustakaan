const form = document.getElementById("form-login");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const usernameKosong = inputUsername.value.trim() === "";
    const passwordKosong = inputPassword.value === "";

    inputUsername.classList.toggle("is-invalid", usernameKosong);
    inputPassword.classList.toggle("is-invalid", passwordKosong);

    if (usernameKosong || passwordKosong) return;

    localStorage.setItem("nisLogin", inputUsername.value.trim()); // BARU: NIS tersimpan

    window.location.href = "beranda.html";
});

[inputUsername, inputPassword].forEach(function (input) {
    input.addEventListener("input", function () {
        input.classList.remove("is-invalid");
    });
});