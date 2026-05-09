window.addEventListener("load", function() {
    // Try to read from local storage, otherwise set to default
    let currentTheme = localStorage.getItem("mytheme") || "catppuccin";

    setTheme("catppuccin", currentTheme);
    const themeSelector = document.getElementById("theme");
    themeSelector.value = currentTheme;
    themeSelector.textContent = currentTheme;
}, false);

let k = 0;
const themeSelector = document.getElementById("theme");
const themes = ["catppuccin", "kanagawa"]
window.addEventListener("keydown", function(event) {
    if (event.key == "l" || event.key == "ArrowRight") {
        const newTheme = themes[k];
        setTheme(currentTheme, newTheme);
        document.getElementById("theme").textContent = newTheme;
        k = (k + 1) % themes.length
    }
    if (event.key == "h" || event.key == "ArrowLeft") {
        const newTheme = themes[k];
        setTheme(currentTheme, newTheme);
        document.getElementById("theme").textContent = newTheme;
        k = (k - 1) % themes.length
        if (k == -1) { k = themes.length - 1 }
    }
});

document.getElementById("right").addEventListener("click", function() {
    const newTheme = themes[k];
    setTheme(currentTheme, newTheme);
    document.getElementById("theme").textContent = newTheme;
    k = (k + 1) % themes.length
});

document.getElementById("left").addEventListener("click", function() {
    const newTheme = themes[k];
    setTheme(currentTheme, newTheme);
    document.getElementById("theme").textContent = newTheme;
    k = (k - 1) % themes.length
    if (k == -1) { k = themes.length - 1 }
});

function setTheme(oldTheme, newTheme) {
    const body = document.getElementsByTagName("body")[0];

    body.classList.remove(oldTheme);
    body.classList.add(newTheme);

    currentTheme = newTheme;

    // Store the new theme in local storage
    localStorage.setItem("mytheme", newTheme);
}
