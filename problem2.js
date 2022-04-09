
function Cube(){
  
var num=document.getElementById('num2').value;
  var cube=1;
  for(let i=1; i<=num; i++){
    cube = i*i*i;
  }
  var result2 = document.getElementById('ans2');
  result2.innerHTML= " The Cube Of Intiger Is "+cube;

}
  