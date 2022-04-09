function Palindrome(){
  var str= document.getElementById('num12').value;
  var x;
  var y;
     var x = str.length;
     var y = Math.floor(x/2);

    for( var i=0; i<y; i++){
        if (str[i] !== srt[x-1-i]){
           document.getElementById('num12').innerHTML = "Error";
        }
        else{
          var result12 = document.getElementById('ans12');
          result12.innerHTML = y;
          
        }
    }
}