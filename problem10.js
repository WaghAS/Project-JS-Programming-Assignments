function Showorder(){
var num=document.getElementById('num10').value;
var arr=num.toString().split('');
arr.shift(0);
var even= [];
  for(var i=0; i<arr.lemgth;i+=2){
    even.push(arr[i]);
  }
  even.sort();
  var j=0;
  for(var i=0; i<arr.lemgth;i+=2){
    arr[i]=even[j];
    j+=1;
  }
  var result10 = document.getElementById('ans10');
  result10.innerHTML=arr;
}