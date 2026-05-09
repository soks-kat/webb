const container = document.getElementById("container")
container.style.display = 'none';
var in_container = false;
window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (!in_container) {
            container.style.display = "block";
            in_container = true;
        } else {
            container.style.display = "none";
            in_container = false;
        }
    }
    if (event.key == "Escape") {
        container.style.display = "none";
        in_container = false;
    }
});
