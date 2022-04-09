function Convert(){
  var x=document.getElementById('num5').value;
  var y= (x*1.8)+32;

var result5= document.getElementById('ans5')
  result5.innerHTML= "Conversion Is Here In Fahrenheit :"+y.toFixed(2);
}
  