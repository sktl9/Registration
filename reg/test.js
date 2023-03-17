document.querySelector(*.b-1*).addEventListener('click',()=>
f1. call(document.querySelector('.b-2')); 

function f3 (count) {
console.log(count);
console. log(this);
this.textContent = count;
document.queryselector('.b-3').addEventListener('click',()=>{
count++;


f3.call(document-querySelector('b-2'),count);

function sum1 (a,b) {
this.innerHTML = a + b;
document-querySelector(*.b-2").addEventListener('click',()=>
sum1(3,4);