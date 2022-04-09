
function Area(){
  
var num=document.getElementById('num4').value;
  var Area=1;
  for(let i=1; i<=num; i++){
    Area = (1.7320 *i*i)/4
  }
  var result3 = document.getElementById('ans3');
  result3.innerHTML= "Area Of Equilaterial Triangle Is "+Area.toFixed(2);

}
  