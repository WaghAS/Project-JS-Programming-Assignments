function Nthnumber(){
  var Nth = parseInt(document.getElementById('num13').value);
  var init = 0;
  
  for(var i = 1; i <= Nth; i++){
    init = init + (2*i);
  }
  
  var result13 = document.getElementById ('ans13');
  result13.innerHTML = init;
}