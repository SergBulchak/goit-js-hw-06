const login = document.querySelector(".login-form");

login.addEventListener("submit", onLoginForm);

function onLoginForm(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
if (email.value === "" || password.value === "") {
    return window.alert("Будь ласка, заповніть всі поля");
}
    
    const userData = { email: email.value, password: password.value };
  console.log(userData);

    event.currentTarget.reset();
    
}
