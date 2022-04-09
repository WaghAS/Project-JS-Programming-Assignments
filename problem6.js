function sum(){
  var num=document.getElementById('num6').value;
  var  Sum=0;
  for(let i=1; i<=num; i++){
    Sum= Sum+i;
  }
  // var result6 = document.getElementById('ans6');
  // result6.innerHTML= "The Sum Of Value From 1 to ${num}   Is "+Sum;
  document.getElementById('ans6').innerText=`The Sum Of 1 to ${num}  is ${Sum}.`;
}
  