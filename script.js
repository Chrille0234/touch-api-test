const h2 = document.querySelector("h2")
const div = document.querySelector("div")

let startX = 0
let startY = 0

div.addEventListener("touchstart", function(event){
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
})

div.addEventListener("touchend", function(event){
    let endX = event.changedTouches[0].clientX
    let endY = event.changedTouches[0].clientY

    let horizontal = endX < startX - 50 ? "left" : endX > startX + 50 ? "right" : false;
    let vertical = endY < startY - 50 ? "up" : endY > startY + 50 ? "down" : false;



    if(horizontal && vertical){
        h2.innerHTML = `You swiped ${horizontal} and ${vertical}`
    } else if(horizontal){
        h2.innerHTML = `You swiped ${horizontal}`
    } else if(vertical){
        h2.innerHTML = `You swiped ${vertical}`
    } else {
        h2.innerHTML = "Swipe, dumbass"
    }
})

