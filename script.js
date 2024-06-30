const Inc=document.getElementById("Increse");
const Dnc=document.getElementById("Decrease");
const Reset=document.getElementById("Reset");
const countLable=document.getElementById("count");
let count=0;
Inc.onclick=function(){
    count++;
    countLable.textContent=count;
}
Dnc.onclick=function(){
    count--;
    countLable.textContent=count;
}
Reset.onclick=function(){
    count=0;
    countLable.textContent=count;
}