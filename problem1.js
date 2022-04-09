function Factorial(){
  var num=document.getElementById('num1').value;
  var fact=1;
  for(let i=1; i<=num; i++){
    fact = fact*i;
  }
  var result1 = document.getElementById('ans1');
  result1.innerHTML= "The Factorial Of Intigral Is "+fact;
  
} 