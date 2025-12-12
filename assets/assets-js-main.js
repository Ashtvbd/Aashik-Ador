document.getElementById("themeToggle").onclick = function () {
    document.body.classList.toggle("dark-theme");
};
document.getElementById("year").innerText = new Date().getFullYear();

