function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColorBtn() {
  return `#${Math.floor(Math.random() * 16715544).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const nameColorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  let colorBtn = getRandomHexColorBtn();
  document.body.style.backgroundColor = color;
  nameColorSpan.textContent = color;
  changeColorBtn.style.backgroundColor = colorBtn;
});

/* Спробував ще побавитись із кольором кнопки :)))))) */