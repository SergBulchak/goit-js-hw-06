const control = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

control.addEventListener("input", (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});