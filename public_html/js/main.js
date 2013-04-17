var xmlhttp;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}else{// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("POST","php/server.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("action=select&con=a;b;c");
xmlhttp.onreadystatechange=function(){
  if (xmlhttp.readyState===4 && xmlhttp.status===200){
    printResults(xmlhttp.responseText);

  }
};

function printResults(result){
        var data = JSON.parse(result);
}


