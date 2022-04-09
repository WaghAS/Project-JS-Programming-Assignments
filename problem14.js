function Rotate() {
  var N1 = parseInt(document.getElementById('N1').value);
  var k = parseInt(document.getElementById('K').value);

  var array = N1.toString().split('');

  console.log(array);

  for (var i = k ; i <= array.length; i++){
    var del = array.pop();
    array.unshift(del);
    
  }

  var result14 = document.getElementById ('ans14');
  result14.innerHTML = array;
}