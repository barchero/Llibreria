function searchList(){
    var value = document.getElementById("searchField").value;
    value = value.replace(" ", ";");
    var xmlhttp;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST","php/server.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("action=select&con="+value);
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState===4 && xmlhttp.status===200){
        constructList(xmlhttp.responseText);

      }
    }
}
function constructList(result){
    var data = JSON.parse(result);
    console.log(data);
    var list = document.getElementById("bookList");
    list.innerHTML = "";
    for(i=0; i<(data.length-1);i++){
        list.innerHTML += "<li class='listItem' id='"+data[i].name+"' onClick='editFields(this.id);'>"+data[i].name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data[i].author+"</li>";
    }
}
function editFields(name){
    var xmlhttp;
    var nameField = document.getElementById("nameField");
    var authorField = document.getElementById("authorField");
    var isbnField = document.getElementById("isbnField");
    var descriptionArea = document.getElementById("descriptionArea");
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST","php/server.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("action=select&con="+name);
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState===4 && xmlhttp.status===200){
        var data = JSON.parse(xmlhttp.responseText);
        nameField.value = data[0].name;
        authorField.value = data[0].author;
        isbnField.value = data[0].isbn;
        descriptionArea.innerHTML = data[0].description;

      }
    }
}

function printResults(result){
        var data = JSON.parse(result);
}


