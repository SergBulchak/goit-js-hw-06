const validationInput = document.getElementById("validation-input");
const symbol = Number(validationInput.getAttribute("data-length"));


validationInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length != symbol) {
        validationInput.classList.add("invalid");
    } else {
        if (validationInput.classList.contains("invalid")) {
            validationInput.classList.replace("invalid", "valid");
        }
    }
});