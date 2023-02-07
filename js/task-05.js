const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function onInputName(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
};

input.addEventListener("input", onInputName);