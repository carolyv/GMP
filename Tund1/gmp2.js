let canvas
let ctx

window.onload = function() {
    canvas = document.querySelector("#canvas")
    ctx = canvas.getContext("2d")
    //primitive_drawing()
    heart()
    canvas.addEventListener("click", point)
}

function point(e) {
    let x = e.clientX - e.target.offsetLeft + window.scrollX
    let y = e.clientY - e.target.offsetTop + window.scrollY
    ctx.beginPath()
        ctx.arc(x, y, 10, 0, 2*Math.PI)
        ctx.fill()
        
    ctx.closePath()
}


function heart() {
    ctx.fillStyle = "red"
    ctx.strokeStyle = "red"
    // liigutame konteksti
    // ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.beginPath()
        //ctx.arc(0, 0, 100, 0, 2*Math.PI)
        ctx.moveTo(0, -50)
        ctx.bezierCurveTo(0, -120, -100, -120, -100, -50)
        ctx.bezierCurveTo(-100, 30, 0, 30, 0, 100)
        ctx.bezierCurveTo(0, 30, 100, 30, 100, -50)
        ctx.bezierCurveTo(100, -120, 0, -120, 0, -50)
        ctx.fill()
    ctx.closePath()
}


function primitive_drawing() {
    ctx.strokeStyle = "red" // väärtuseks string
    ctx.lineWidth = 8
    // ülemine vasak nurk, x, y, laius, kõrgus
    ctx.strokeRect(10, 10, 100, 200)
    ctx.fillRect(10, 220, 100, 200)
    ctx.beginPath()
        ctx.rect(120, 10, 100, 200)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "blue"
    ctx.beginPath()
        ctx.rect(120, 220, 100, 200)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    // ring, keskpunkti x, y, raadius, algusnurk, lõpunurk
    ctx.beginPath()
        ctx.arc(115, 480, 50, 0, 1.5*Math.PI)
        ctx.stroke()
    ctx.closePath()
    ctx.fill()
    //ctx.stroke()
    //sirglõik
    ctx.beginPath()
        // liigu punkti x, y
        ctx.moveTo(canvas.width / 2, 0)
        //lõpppunkti x, y
        ctx.lineTo(canvas.width / 2, canvas.height)
        ctx.lineTo(canvas.width, canvas.height / 2)
        ctx.stroke()
        //ctx.fill()
    ctx.closePath()
    // kõverad
    ctx.strokeStyle = "magenta"
    ctx.beginPath()
        // liigu punkti x, y
        ctx.moveTo(canvas.width / 2, 0)
        // kontrollpunkt x, y, lõpppunkt x, y
        ctx.quadraticCurveTo(canvas.width, canvas.height / 2, canvas.width / 2, canvas.height)
        ctx.stroke()
    ctx.closePath()
    ctx.strokeStyle = "green"
    ctx.beginPath()
        // liigu punkti x, y
        ctx.moveTo(canvas.width / 2, 0)
        // kontrollpunkt1 x, y, kontrollpunkt2 x, y, lõpppunkt x, y
        ctx.bezierCurveTo(canvas.width, canvas.height / 2, 0, canvas.height / 2, canvas.width / 2, canvas.height)
        ctx.bezierCurveTo(canvas.width, canvas.height / 2, 0, canvas.height / 2, canvas.width / 2, 0)
        ctx.stroke()
    ctx.closePath()
}