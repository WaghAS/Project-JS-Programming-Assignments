function Root(){
  var x = document.getElementById("num9a").value;
  var y = document.getElementById("num9b").value
  var z = document.getElementById("num9c").value;

  var root1=(-y-Math.sqrt(Math.pow(y,2)-4*x*z))/(2*x);
  var root2=(-y+Math.sqrt(Math.pow(y,2)-4*x*z))/(2*x);
  
  var result1= document.getElementById("R1");
  var result2= document.getElementById("R2");

  result1.innerHTML=(Math.round(root1*100)/100).toFixed(2);
  result2.innerHTML=(Math.round(root2*100)/100).toFixed(2);
  
}