import { writeCSS } from "./css_utils.mjs";

const catppuccin = {
    name: "catppuccin",
    background: "#1e1e2e",
    text: "#cdd6f4",
    primary: "#cba6f7",

    red: "#f38ba8",
    orange: "#fab387",
    yellow: "#f9e2af",
    green: "#a6e3a1",
    blue: "#89b4fa",
    purple: "#cba6f7",
}

const kanagawa = {
    name: "kanagawa",
    background: "#1f1f28",
    text: "#DCD7BA",
    primary: "#6A946A",

    red: "#c34043",
    orange: "#d18658",
    yellow: "#c0a36e",
    green: "#76946A",
    blue: "#7E9CD8",
    purple: "#957FB8",
}

const trans = {
    name: "trans",
    background: "#1e1e2e",
    text: "#cdd6f4",
    primary: "#f5bde6",

    red: "#99c0ff",
    orange: "#f38ba8",
    yellow: "#f6f1ff",
    green: "#f6f1ff",
    blue: "##f38ba8",
    purple: "#99c0ff",
}

const custom = {
    name: "custom",
    background: "#111",
    text: "#cdd6f4",
    primary: "#525252",

    red: "#733737",
    orange: "#734E37",
    yellow: "#736237",
    green: "#3D523C",
    blue: "#3D4559",
    purple: "#4E3D59",
}

// const themes = [catppuccin, kanagawa, trans];

export function get_theme() {
    let themes_copy = [...themes];
    themes_copy.push(custom);
    // console.log(themes, themes_copy);
    return themes_copy;
}

let k = 0;
let currentTheme = 0
var themes = [catppuccin, kanagawa, trans];
window.addEventListener("load", function() {
    // Try to read from local storage, otherwise set to default
    //localStorage.getItem("mytheme") ||
    console.log("themes loaded: ", localStorage.getItem("allThemes"));
    currentTheme = 0;
    themes = JSON.parse(localStorage.getItem("allThemes")) || [catppuccin, kanagawa, trans];
    console.log(currentTheme)

    k = currentTheme;
    setTheme(0, currentTheme);
}, false);

window.addEventListener("keydown", function(event) {
    if (event.key == "l" || event.key == "ArrowRight") {
        k = (k + 1) % themes.length;
        setTheme(currentTheme, k);
    }
    if (event.key == "h" || event.key == "ArrowLeft") {
        k = (k - 1) % themes.length;
        if (k == -1) { k = themes.length - 1 };
        setTheme(currentTheme, k);
    }
});

document.getElementById("right").addEventListener("click", function() {
    k = (k + 1) % themes.length;
    setTheme(currentTheme, k);
    console.log(k, themes[k])
});

document.getElementById("left").addEventListener("click", function() {
    console.log(k, themes[k])
    k = (k - 1) % themes.length;
    if (k == -1) { k = themes.length - 1 };
    setTheme(currentTheme, k);
});

document.addEventListener('click', async function(event) {
    const themeBox = event.target.closest('.theme_box');
    if (themeBox && themeBox.id) {
        // console.log(`${themeBox.id} ${themes[themeBox.id]} clicked`);
        k = themeBox.id;
        if (k >= themes.length) {
            await createTheme();
            console.log(themes[k]);
        }
        setTheme(currentTheme, k);
    }
});

function setTheme(old_id, new_id) {
    const body = document.getElementsByTagName("body")[0];

    const oldTheme = themes[old_id];
    const newTheme = themes[new_id];

    console.log(oldTheme)

    const styleSheetContent = `
    .${newTheme["name"]} {
        --background: ${newTheme["background"]};
        --text: ${newTheme["text"]};
        --primary: ${newTheme["primary"]};

        --red: ${newTheme["red"]};
        --orange: ${newTheme["orange"]};
        --yellow: ${newTheme["yellow"]};
        --green: ${newTheme["green"]};
        --blue: ${newTheme["blue"]};
        --purple: ${newTheme["purple"]};
    }
        `;

    console.log(styleSheetContent)

    var prev_sheet = document.getElementById(oldTheme["name"] + "theme")
    if (prev_sheet != null) {
        prev_sheet.disabled = true;
        prev_sheet.parentNode.removeChild(prev_sheet);
    }

    writeCSS(newTheme["name"] + "theme", styleSheetContent);

    body.classList.remove(oldTheme["name"]);
    body.classList.add(newTheme["name"]);

    currentTheme = new_id;
    document.getElementById("theme").textContent = newTheme["name"];

    // Store the new theme in local storage
    localStorage.setItem("mytheme", new_id);
}

async function createTheme() {
    const ui = document.getElementById("color-ui");
    document.getElementById("color-title").innerHTML = ` ⢇⢸ ⢀⡀ ⡀⢀ ⡀⣀   ⣰⡀ ⣇⡀ ⢀⡀ ⣀⣀  ⢀⡀
  ⠇ ⠣⠜ ⠣⠼ ⠏    ⠘⠤ ⠇⠸ ⠣⠭ ⠇⠇⠇ ⠣⠭`
    ui.showModal();

    const my_theme = {
        name: "my_theme",
        background: "#111",
        text: "#cdd6f4",
        primary: "#525252",

        red: "#733737",
        orange: "#734E37",
        yellow: "#736237",
        green: "#3D523C",
        blue: "#3D4559",
        purple: "#4E3D59",
    };

    var inputElem = document.getElementsByClassName('colorpick');

    for (var i = 0; i < inputElem.length; i++) {

        inputElem[i].addEventListener("change", function(e) {
            console.log(this.id)
            my_theme[this.id] = e.target.value;
        });
    }
    let promise = new Promise((resolve, reject) => {
        document.getElementById("finish-colors").addEventListener("click", async function(e) {
            resolve("done!")
        });
    });

    let result = await promise; // wait until the promise resolves (*)

    themes.push(my_theme);
    localStorage.setItem("allThemes", JSON.stringify(themes));
    console.log("theme created:", themes);
    ui.close();
} 
