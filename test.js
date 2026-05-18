const colorPicker = document.getElementById("colorpick");

colorPicker.addEventListener("change", function(e) {
    console.log(e.target.value);
    colorPicker.style.color = "red";
})

