var but=document.getElementById('b')
var bu=document.getElementById('bt')
var imp=document.getElementById('p')
var imc=document.getElementById('cp')
var ch=document.querySelectorAll('#ch')
var bts
var ply
var cpv
var blv
var i=0,j=0
var ps=parseInt(document.getElementById('pl').innerText)
var cs=parseInt(document.getElementById('co').innerText)
var im={
    1:"one.jpeg",
    2:"two.jpeg",
    3:"three.jpeg",
    4:"four.jpeg",
    5:"five.png",
    6:"six.jpeg"
}
bu.onclick=() => {
    but.innerHTML="<button style=\"border: 3px solid;\" class=\"bts\" value=\"Odd\">Odd</button><button style=\"border: 3px solid;\" class=\"bts\" value=\"Even\">Even</button>"
    bts=document.querySelectorAll('.bts')
    btss()
}

function btss(){
bts.forEach((el) => {
    el.addEventListener('click',() => {
    console.log("inside")
    blv=el.value
    input()
    })
});}
function input(){
    ch.forEach((el) => {
    el.addEventListener('click',() => {
        ply=parseInt(el.innerText)
        imp.src=im[ply]
        cpv=parseInt(Math.random()*5)+1
        console.log(cpv)
        imc.src=im[cpv]
        if(i){
        if(blv=="Bowl"){
            cs+=cpv
            document.getElementById('co').innerText=cs
            if(i==2 && cs>ps){
            result()}
        }
        else{
        ps+=ply
        document.getElementById('pl').innerText=ps
        if(j==1 && ps>cs)
            result()}
        if(ply==cpv){
        if(ps!=0 && cs!=0)
        result()
        else if(blv=="Bowl"){
        but.innerHTML=`<div style="font-style: italic;
  font-family: Impact;
  font-weight: 600;
  color: black;
  background: white;
    margin:2ch;
    font-size: 5ch;
    text-align: center;
  border: 1px solid;
  border-radius: 60pt;">Computer Out and its your turn</div>`

        blv="Bat"}
        else{
        but.innerHTML=`<div style="font-style: italic;
  font-family: Impact;
  font-weight: 600;
  color: black;
  background: white;
    margin:2ch;
    font-size: 5ch;
    text-align: center;
  border: 1px solid;
  border-radius: 60pt;">opps! you Out and its computer's turn</div>`
  document.body.style.backgroundColor="red"
  sleep
        blv="Bowl"}
    }
        }
        else
        run()
    })
    })
}
function run(){
    if((ply+cpv)%2==0)
    ans="Even"
    else
    ans="Odd"
    if(blv==ans){
       but.innerHTML=`<div style=\"border: 3px solid;\">For ${blv} You Win,and Going to bat</div>`
       blv="Bat"
       i+=1
    }
    else{
    but.innerHTML=`<div style=\"border: 3px solid;\">For ${blv} You Loose,and Going to bowl</div>`
    blv="Bowl"
    j+=1
    }
    i+=1
}
function result(){
    if(ps>cs){
        but.innerHTML=`<div style=\"border: 3px solid;font-style: italic;
  font-family: Impact;
  color: black;
 width: 20ch;
 text-align: center;
 margin:2ch;
 background: white;
    height: 5ch;
  border: 1px solid;
  border-radius: 60pt;\">You Wins</div>`
  document.body.style.backgroundColor="green"}
    else if(cs>ps){
        but.innerHTML=`<div style=\"border: 3px solid;font-style: italic;
  font-family: Impact;
  font-weight: 600;
   font-size: 5ch;
   background: white;
text-align: center;
margin:2ch;
  color: black;
  border: 1px solid;
  border-radius: 60pt;\">You Loose</div>`
  document.body.style.backgroundColor="red"}
    else{
        but.innerHTML=`<div style=\"border: 3px solid;font-style: italic;
  font-family: Impact;
  font-weight: 600;
  color: black;
  background: white;
    margin:2ch;
    font-size: 5ch;
    text-align: center;
  border: 1px solid;
  border-radius: 60pt;\">Match Tie</div>`
 document.body.style.backgroundColor="gray"}
}