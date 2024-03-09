window.addEventListener("load",()=>{
    const canvas=document.getElementById("canvas")
    const context=canvas.getContext("2d")
    const sizeInput=document.querySelector("#font-size")
    const colorInput=document.querySelector("#color")
    canvas.height=window.innerHeight
    canvas.width=window.innerWidth


    
//Drawing
let isClicked=false;
canvas.addEventListener("mousedown",(e)=>{
    isClicked=true
    context.beginPath()
draw(e)
})
canvas.addEventListener("mouseup",()=>{
    isClicked=false

})
canvas.addEventListener("mousemove",draw)
function draw(e,color,thick){
    if(isClicked===false) return 
    color = color || colorInput.value;
    thick = thick || sizeInput.value;

console.log( color,thick)
    context.lineWidth=thick;
    context.strokeStyle=color
    context.lineCap="round"
    context.lineTo(e.clientX,e.clientY)
    context.stroke()
    // //now the issue is whenever we finish and start again it will start from the previous last point to fix line we need to reset the starting position which we can do that with beginPath() and we also pass this to function when we mouseup
    // context.beginPath()
    // context.moveTo(e.clientX,e.clientY)
    //this works only when we drag the mouse on click it is not adding dots so to do so we need to call this draw function on mousedown
}

colorInput.addEventListener("change",(e)=>{
    let value=colorInput.value
    let size=sizeInput.value
    draw(e,value,size)
})
sizeInput.addEventListener("change",(e)=>{
    let value=sizeInput.value
    let color=colorInput.value
    draw(e,color,value)
})
})
window.addEventListener("resize",()=>{
    const canvas=document.getElementById("canvas")
    canvas.height=window.innerHeight
    canvas.width=window.innerWidth
}
)