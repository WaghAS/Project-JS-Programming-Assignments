function String(){
  var a = document.getElementById('string').value;
  var string = a.replace(/ /g, "");
  
  var result8 = document.getElementById ('ans8');
   result8.innerHTML =  string.length;
}