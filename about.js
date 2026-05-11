const container = document.getElementById("container")
// container.style.display = 'none';
var in_container = false;
window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        if (!in_container) {
            container.showModal();
            in_container = true;
        } else {
            container.close();
            in_container = false;
        }
    }
    // if (event.key == "Escape") {
    //     container.close();
    //     in_container = false;
    // }
});

document.getElementById("about").addEventListener("click", function() {
    container.showModal();
    in_container = true;
});
