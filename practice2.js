
var i=1;
var j=1;
function createTable(){
    const nameElement = document.getElementById("name");
    const name = nameElement.value;
    const emailElement = document.getElementById("email");
    const email = emailElement.value;
    //body reference 
    var body = document.getElementsByTagName("body")[0];
    //create elements <table> and a <tbody>
    // var tbl = document.createElement("table");
    var tbl = document.getElementById('myTable');
    // var tblBody = tbl.getElementsByTagName("tbody");
    var tblBody = document.getElementById("myTbody");
    id=i;
    

    var row = '<tr><td id="' + i + 'name"' + '>'+name+'</td><td id="'+ i + 'email"' + '>'+email+'</td>' + '<td id="'+i+'Butt_edit"><input type="button" value="修改" onclick="edit('+i+')"/></td><td id="'+i+'Butt_save"><input type="button" value="保存" onclick="save('+i+')"/></td><td id="'+i+'Butt_cancel"><input type="button" value="取消" onclick="cancel('+i+')" /></td></tr>'; 
    tblBody.insertAdjacentHTML('beforeend', row);

    tbl.appendChild(tblBody);
    //put <table> in the <body>
    body.appendChild(tbl);
    //tbl border attribute to 
    tbl.setAttribute("border","2");
    i++;
}


function edit(no) {
    
        document.getElementById(no+"Butt_edit").style.display="none";
        document.getElementById(no+"Butt_save").style.display="block";
        document.getElementById(no+"Butt_cancel").style.display="block";
       
        var name=document.getElementById(no+"name");
        var email=document.getElementById(no+"email");
        
            
        var name_data=name.innerHTML;
        var email_data=email.innerHTML;
            
        name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
        email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
        
           
    
}
function save(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 

 document.getElementById(no+"name").innerHTML=name_val;
 document.getElementById(no+"email").innerHTML=email_val;
 

 document.getElementById(no+"Butt_edit").style.display="block";
 document.getElementById(no+"Butt_save").style;
}




function cancel(){
    
}

