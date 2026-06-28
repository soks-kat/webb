import { readCSS } from "./css_utils.js";
import { get_theme } from "./theme.js";

const container = document.getElementById("container")

function isContainerOpen() {
    return container.matches(":popover-open");
}

window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (!isContainerOpen()) {
            container.showPopover();
        } else {
            container.close();
        }
    }
});

document.getElementById("about").addEventListener("click", function() {
    make_container("about")
});

document.getElementById("theme").addEventListener("click", function() {
    make_container("theme")
});

function make_container(what) {
    switch (what) {
        case "theme":
            var title =
                ` ⢎⡑ ⢀⡀ ⡇ ⢀⡀ ⢀⣀ ⣰⡀   ⣰⡀ ⣇⡀ ⢀⡀ ⣀⣀  ⢀⡀
 ⠢⠜ ⠣⠭ ⠣ ⠣⠭ ⠣⠤ ⠘⠤   ⠘⠤ ⠇⠸ ⠣⠭ ⠇⠇⠇ ⠣⠭`; // select theme
            content_theme();
            break
        case "about":
            var title =
                `⡇⡠ ⢀⣀ ⠄   ⡎⠑ ⢀⣀ ⣰⡀ ⢀⣀ ⡇ ⢀⣀ ⣀⡀   ⡏⢱ ⢀⣀ ⣀⡀ ⠄ ⢀⡀ ⡇ ⢀⣀
⠏⠢ ⠣⠼ ⠇   ⠣⠔ ⠣⠼ ⠘⠤ ⠣⠼ ⠣ ⠣⠼ ⠇⠸   ⠧⠜ ⠣⠼ ⠇⠸ ⠇ ⠣⠭ ⠣ ⠭⠕` // kai catalan daniels
            document.getElementById("description").innerHTML = "My name is Kai Catalan Daniels and I am a student at UAB. <br> I like cats, colourfull things, drawing, climbing and sewing."
            break
    }
    document.getElementById("title").innerHTML = title;

    container.showPopover();
}

container.addEventListener("toggle", (e) => {
    if (e.newState == "closed") {
        document.getElementById("description").innerHTML = "";
    }
});

export function content_theme() {
    console.log(get_theme());
    const themeData = get_theme();
    const description = document.getElementById("description")
    for (let i = 0; i < themeData.length; i++) { // theme presets
        let theme = themeData[i];
        const theme_box = document.createElement('div');
        theme_box.id = i;
        theme_box.className = "theme_box";
        const display_theme = document.createElement('div');
        display_theme.innerHTML = theme["name"];

        display_theme.style.color = theme['text'];
        theme_box.style.background = theme['background'];
        theme_box.style.borderColor = theme['primary'];
        theme_box.appendChild(display_theme);

        const colours = ["red", "orange", "yellow", "green", "blue", "purple"];

        for (const colour_name of colours) {
            const colour = document.createElement('div');
            colour.innerHTML = "❤︎";
            colour.style.color = theme[colour_name];
            theme_box.appendChild(colour);
        }
        description.appendChild(theme_box);
    }
    return description;
}


