var dis=document.querySelector("#screen")
var btn=document.querySelectorAll('[bt]')
btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        var btntxt=e.currentTarget.innerText;
if (btntxt=='0' || btntxt=='0' || btntxt=='1' || btntxt=='2' || btntxt=='3' || btntxt=='4' || btntxt=='5' || btntxt=='6' || btntxt=='7' || btntxt=='8' || btntxt=='9' || btntxt=='÷' || btntxt=='×' || btntxt=='+' || btntxt=='-' || btntxt=='π' || btntxt=='.' || btntxt=='(' || btntxt==')' ){ 
        if(btntxt=='×')
        btntxt='*'
        if(btntxt=='÷')
        btntxt="/"
        if(btntxt=='π')
        btntxt="3.14"
        dis.value+=btntxt}
else{
        if(btntxt=='AC')
        display()
        if(btntxt=='CE')
        dis.value=''
        if(btntxt=='sin'){
        let temp=Math.sin(eval(dis.value))
        dis.value=temp.toString()}
        if(btntxt=='cos'){
            let temp=Math.cos(eval(dis.value))
            dis.value=temp.toString()}
        if(btntxt=='tan'){
            let temp=Math.tan(eval(dis.value))
            dis.value=temp.toString()}
        if(btntxt=='log'){
            let temp=Math.log(eval(dis.value))
            dis.value=temp.toString()}
        if(btntxt=='√'){
            let temp=Math.sqrt(eval(dis.value))
            dis.value=temp.toString()}
        if(btntxt=='x!'){
            dis.value=(Factorial(eval(dis.value))).toString()}}
        })
    
})
function display() {
    dis.value=eval(dis.value)
  }
function Factorial(n) {
    if (n === 0) { 
        return 1; 
    }
    else { 
        return n * Factorial( n - 1 ); 
    }
}