const categoriesEl = document.getElementById("categories");
console.log("Number of categories:", categoriesEl.children.length);

const categoriesItemEl = document.querySelectorAll(".item");
const view = categoriesItemEl.forEach((element) => {
    return console.log("Category:", `${element.firstElementChild.textContent};`,
        "Elements:", element.lastElementChild.children.length);
});