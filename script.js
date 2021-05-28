const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
let pressed = [];

document.addEventListener("keydown", function (e) {
    const key = e.code.replace('Key', '');
    if (keys.includes(key)) {
        if (!pressed.includes(key)) {
            pressed.push(key);
            let audio = new Audio("sounds/" + key + ".mp3");
            audio.play();
        }
    }
});

document.addEventListener("keyup", function (e) {
    const key = e.code.replace('Key', '');
    if (keys.includes(key)) {
        pressed.splice(pressed.indexOf(key));
    }
});

document.querySelectorAll("div kbd").forEach(function (el) {
    const key = el.innerHTML;
    el.addEventListener("click", function () {
        if (keys.includes(key)) {
            let audio = new Audio("sounds/" + key + ".mp3");
            audio.load();
            audio.play();
        }
    });
});