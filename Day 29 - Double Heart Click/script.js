const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let timesclicked = 0;
let clickTime = 0;

loveMe.addEventListener("click", function (e) {

    // creating out own double click functionality.
    if (clickTime === 0) {
        clickTime = new Date().getTime();
        // console.log(clickTime);
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});



function createHeart(e) {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xinside = x - leftOffset;
    const yinside = y - topOffset;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesclicked;

    setTimeout(function () {
        heart.remove();
    }, 1000);
}