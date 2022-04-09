function Day(){
  var month=parseInt(document.getElementById('day').value);
  console.log(month);
switch(month){
  case 1:
    var days="31 Days";
    break;
  case 2:
    var days="28 Days";
    break;  
  case 3:
    var days="31 Days";
    break;
  case 4:
    var days="30 Days";
    break;
  case 5:
    var days="31 Days";
    break;
  case 6:
    var days="30 Days";
    break; 
  case 7:
    var days="31 Days";
    break;  
  case 8:
    var days="31 Days";
    break;
  case 9:
    var days="30 Days";
    break;
  case 10:
    var days="31 Days";
    break;
  case 11:
    var days="30 Days";
    break;
  case 12:
    var days="31 Days";
    break;
  default:
    var days="Error"
    break;
}  
  var result4 = document.getElementById('ans4');
  result4.innerHTML= " Total Dys Of Month Is "+ days ;
}


// function Day(){
//   var num=document.getElementById('num4').value;
  
// if(n>12){
//   var result4 = document.getElementById('ans4');
//   result4.innerHTML= "Error;"
// else
// {
//   var n1=  new Date(2022,n,0).getDate()
//   result4.innerHTML=" Total Dys Of Month Is "+ 'n1'";
// }  
// }