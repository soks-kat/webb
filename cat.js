window.addEventListener("load", function() {
    setTimeout(mau, (Math.random() * 7 + 2) * 1000)
    setTimeout(sit, (Math.random() * 10 + 2) * 1000)
}, false);

// cat animation
let i = 1

const a = "<br>"
let sitting = false

const catFrames = [

    "  ／\\、   " + a +
    " (`˕- ﾌ__ノ " + a +
    "  |、     ) " + a +
    "  ૮し\"\"૮しﾉ " + a,

    "  /\\_^      " + a +
    " (^˕^ )__ノ " + a +
    "  |、     ) " + a +
    "  し૮\"\"し૮ﾉ " + a,

    "  __/\\      " + a +
    "<(-˕՛ )__ノ " + a +
    "  |、     ) " + a +
    "  ૮し\"\"૮しﾉ " + a,

    "  /\\_^      " + a +
    " (^˕^ )__ノ " + a +
    "  |、     ) " + a +
    "  し૮\"\"し૮ﾉ " + a,

    "     ／\\、   " + a +
    "    (`˕- ﾌ    " + a +
    "    |、  \\    " + a +
    "    ししと)⎠  " + a
]

//changes cat sprite
function animation() {
    if (sitting) {
        document.getElementById("cat").innerHTML = catFrames[catFrames.length - 1];
    } else {
        document.getElementById("cat").innerHTML = catFrames[i];
        i = (i + 1) % (catFrames.length - 1);
    }
}

//moving
let j = 0;
const cat = document.getElementById("cat");
const meow = document.getElementById("meow");
const heart = document.getElementById("heart");
const parent = document.getElementById("parent");
console.log("kai and lia are stupid")
function moving() {
    const catSize = cat.getBoundingClientRect().right - cat.getBoundingClientRect().left;
    const size = (parent.getBoundingClientRect().right - parent.getBoundingClientRect().left);
    // console.log(cat.getBoundingClientRect().right, size);
    if (!sitting) {
        j += 1;
        // console.log(j);
        if (cat.getBoundingClientRect().left < -catSize) {
            j = -6;
        }
    }
    cat.style.right = (0 + j) + "em";
    meow.style.right = (5 + j) + "em";
}
setInterval(moving, 400);
const interval = setInterval(animation, 400);

//meow
meow.style.display = 'none';
function mau() {
    console.log("mow")
    meow.style.display = 'block';
    const meowAud = new Audio('https://bertran.xyz/media/meow.mp3')
    meowAud.play()
    setTimeout(
        function() {
            meow.style.display = 'none';
        },
        2000
    );
    setTimeout(mau, (Math.random() * 15 + 10) * 1000)
}

//sit
function sit() {
    sitting = true
    setTimeout(
        function() {
            sitting = false;
        },
        4000
    );
    setTimeout(sit, (Math.random() * 15 + 5) * 1000)
}

//better random
function random(dev) {
    return (Math.random() - 0.5) * 2 * dev
}

//creates heart
hearts = false
cat.addEventListener("click",
    function(event) {
        const heart = document.createElement('div');
        heart.innerHTML = "♡"
        heart.className = "heart"
        const purr = new Audio('https://bertran.xyz/media/purr.mp3')
        purr.play()
        //heart animation
        let x = 0;
        let d = 0;
        const Aran = random(1.5)
        const Fran = random(1.5)
        const Tran = random(0.3)
        function heartAnim() {
            d = Math.sin(2 * x + Fran) * (x + 2 + Aran) / 4 + x / 2;
            console.log(d);
            x += 0.5 + Tran;
            heart.style.right = (7 + j + d) + "em";
            heart.style.bottom = (3 + x / 2) + "em";
        }
        const heartTime = setInterval(heartAnim, 200);
        heartAnim()
        document.getElementById('parent').appendChild(heart);

        setTimeout(
            function() {
                clearInterval(heartTime)
                heart.remove()
            },
            2000
        );

    }
);
