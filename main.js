const btn = document.querySelector(".btn");
const section = document.querySelector(".skills");
btn.addEventListener("click", function () {
    if (section.style.display !== "none") {
        section.style.display = "none";
    }
    else {
        section.style.display = "block";
    }
});
