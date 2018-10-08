// BUBBLE SORT perhaps //
document.addEventListener('DOMContentLoaded', function() {

var bubbleData = new Array(2,3,1,10,4,9,13,23,10,21,19,13,7,33,27,30,24,40,39,38,17,24);

function drawLine(lineL){
  var str ="";
  for(var i=0;i<lineL;i++){
    str = str + "/";
  }
  return str;
}
function drawData(pL){
  for(number in bubbleData){
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id",bubbleData[number]);
    var pText = document.createTextNode(drawLine(bubbleData[number]));
    paragraph.appendChild(pText);
    document.body.appendChild(paragraph);
  }
}

drawData();


function lul(){
  
  var pArray = document.getElementsByTagName("p");
  var i = 0;
  
while(i < (pArray.length - 1)){

 // console.log(pArray[i].getAttributeNode("id").value);
  var a = Number(pArray[i].getAttribute("id"));
 // console.log("A=" + a);
  var b = Number(pArray[i+1].getAttribute("id"));
// console.log("B=" + b);
  if(a > b){
    console.log("A:" + a + " greater than" + " " + "B:" + b);
    pArray[i].parentNode.insertBefore(pArray[i+1],pArray[i]);

  }
  i++;
}

}
var x = 0;

/*
while(x<500){
  lul();
  x++;
}
*/
var interval = setInterval(lul, 1000);

setTimeout( function(){
  clearInterval(interval);
},30000); 
//proper bubble sort would need a checking if everything is sorted, however i didn't implemented it here as this demo is just using a small dataset.
      
}, false);



