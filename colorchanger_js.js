const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const but=document.querySelector(".btn")
const col=document.querySelector(".color")
but.addEventListener("click",function(){
    for(let i=0;i<30;i++){
    setInterval(loop, 5000)
    }
})
function loop(){
    let color1='#'
    for(let i=0;i<6;i++)
    color1+=color[random()]
    console.log(color1)
    document.body.style.backgroundColor=color1
    let name=ntc.name(color1)
    col.textContent=color1
    return 0
}
function random(){
    return Math.floor(Math.random()*16)
}
