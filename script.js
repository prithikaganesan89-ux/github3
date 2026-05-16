// Typing Effect
const text = ["Web Developer", "Frontend Developer", "UI Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 150);
    }

})();


// Dark Mode Toggle
const darkBtn = document.getElementById("dark-mode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// Alert Message
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}