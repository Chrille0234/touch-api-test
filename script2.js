const currentColor = document.querySelector(".currentColor")
const likedColors = document.querySelector(".likedColors")
const colorCodeSpan = document.querySelector("#colorCode")

let startX = 0
let startY = 0


function generateRGB(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    return `rgb(${r}, ${g}, ${b})`
}

function generatedDiv(color){
    let div = document.createElement("div")
    div.style.backgroundColor = color
    div.style.width = "50px"
    div.style.aspectRatio = "9/16"
    div.id = color



    div.addEventListener("click", function(){
        currentColor.style.backgroundColor = color
        colorCodeSpan.innerHTML = color
    })

    likedColors.appendChild(div)

    return color
    
}



let currentRGB = generateRGB()
colorCodeSpan.innerHTML = currentRGB

currentColor.style.backgroundColor = currentRGB

currentColor.addEventListener("touchstart", function(event){
    startX = event.touches[0].clientX
    startY = event.touches[0].clientY
})

currentColor.addEventListener("touchend", function(event){
    let endX = event.changedTouches[0].clientX
    let endY = event.changedTouches[0].clientY

    let direction = endX > startX + 50 ? "right" : endX < startX - 50 ? "left" : false

    if (direction === "left"){
        currentRGB = generateRGB()
        currentColor.style.backgroundColor = currentRGB
        colorCodeSpan.innerHTML = generateRGB()

        currentColor.style.animation="moveLeft 600ms ease-in"
        setTimeout(resetAnimation, 600)
    }
    else if (direction === "right"){
        generatedDiv(currentRGB)
        currentRGB = generateRGB()
        colorCodeSpan.innerHTML = currentRGB
        currentColor.style.backgroundColor = currentRGB
        currentColor.style.animation="moveRight 600ms ease-in"
        setTimeout(resetAnimation, 600)
        

    }
})


function resetAnimation(){
    currentColor.style.animation = ""
}