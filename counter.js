const dis=document.querySelector(".no")
let but=document.querySelectorAll(".btn")
let count=0
console.log(but)
but.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const clas =e.currentTarget.classList
        if(clas.contains("add"))
        count++
        if(clas.contains("reset"))
        count=0
        if(clas.contains("minus"))
        count--
        if(count>0)
        document.body.style.backgroundColor="green"
        if(count<0)
        document.body.style.backgroundColor="red"
        if(count==0){
        document.body.style.backgroundColor="black"
    }
        dis.textContent=count
        })
    
})