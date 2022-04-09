function Series(){
  var num7 = document.getElementById('num7').value;
  var series;
  series = num7*num7;
  if(num7<0){
    document.getElementById('ans7').innerHTML ="ERROR";
  }
  else if (num7 == 0){
    document.getElementById('ans7').innerHTML ="0";
  }
  else {
    var result7 = document.getElementById('ans7');
    result7.innerHTML = series;
  }
}