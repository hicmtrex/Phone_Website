const circle = document.getElementById('circle')
const upBtn = document.getElementById('upBtn')
const downBtn = document.getElementById('downBtn')
let rotleft
let rotright

upBtn.addEventListener('click', rotateLeft)

downBtn.addEventListener('click', rotateRight)

function rotateLeft() {
    rotleft = circle.style.transform + 'rotate(-90deg)';
    circle.style.transform = rotleft
}
function rotateRight(params) {
    rotright = circle.style.transform + 'rotate(90deg)';
    circle.style.transform = rotright
}



/*

upBtn.onclick = function () {

    rotateSum = rotateValue + 'rotate(-90deg)'
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}

downBtn.onclick = function () {

    rotateSum = rotateValue + 'rotate(90deg)'
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}

*/