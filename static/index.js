var element= document.getElementById('menu');
var aside=document.getElementsByTagName('aside')[0];
element.addEventListener("click", myFunction);
var a=1;
function myFunction() {

  document.getElementById("menuSection").style.width='370px';
  document.getElementsByTagName('body')[0].style.overflowY='hidden'
    aside.style.width='100%';
    aside.style.height='100vh';
    aside.style.backgroundColor='rgba(17, 17, 17, 0.4)';
    a=0;
}
aside.addEventListener("click",myFunction2);
function myFunction2() {
      
    document.getElementById("menuSection").style.width='0';
    document.getElementsByTagName('body')[0].style.overflowY='auto'
      aside.style.width='0';
      aside.style.height='0';
      aside.style.backgroundColor='';
      

  }