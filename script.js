let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');

function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        const face = document.createElement('img');
        face.src = 'images/smile.png';
        const randomTop = Math.floor(Math.random() * 400) + 1;
        const randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }

    const leftSidelmages = theLeftSide.cloneNode(true);
    leftSidelmages.removeChild(leftSidelmages.lastChild);
    theRightSide.appendChild(leftSidelmages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}

function nextLevel() {
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();
}

function gameOver() {
    alert('Game Over!');
    document.body.removeEventListener('click', gameOver);
    theRightSide.lastChild.removeEventListener('click', nextLevel);
}

// Restart or Reset Game.
function newGame() {
    window.location.reload(true);
}

// Reference - h1 effect (html, css and javascript form https://tobiasahlin.com/moving-letters/#1) 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
}).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
}).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});  