


function processFormData() 
{
    const nameElement = document.getElementById("name");
    const name = nameElement.value;
    const emailElement = document.getElementById("email");
    const email = emailElement.value;
    
    var body = document.body,
    tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border ="1px solid black";
   
    for(var i = 0; i <3; i++)
    {
        var tr = tbl.insertRow();
        for(var j = 0; j <2; j++)
        {
        if(i == 2 && j == 1)
            {
            break;
            } 
            else 
            {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border ="1px solid black";
                    if(i == 1 && j == 1)
                    {
                        td.setAttribute('rowSpan', '2');
                    }
            }
        }
    }
    body.appendChild(tbl);
    tableCreate();
}
   

//     var body = document.body,
//     tbl  = document.createElement('table');
//     tbl.style.width  = '100px';
//     tbl.style.border = '1px solid black';

// for(var i = 1; i < 2; i++)
// {
//     var tr1 = tbl.insertRow();
//     for(var j = 0; j < 2; j++){
//         if(i == 2 && j == 1)
//         {
//           break;
//         } 
//         else
//         {
//             var td = tr.insertCell();
//             td.appendChild(document.createTextNode(name));
//             td.style.border = '1px solid black';
//             if(i == 1 && j == 1)
//             {
//                 td.setAttribute('rowSpan', '2');
//             }
//         }
//     }
// }
// body.appendChild(tbl);
//     // alert("你的姓名是 " + name + "\n電子郵件是 " + email);


// var body = document.getElementsByTagName("body")[0];
// //create elements <table> and a <tbody>
// var tbl = document.createElement("table");
// var tblBody = document.createElement("tbody"); 


function tableCreate2() {
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

    //融威版本
    // var row = '<tr><td>' + name + '</td><td>' + email + '</td></tr>'; 
    // tblBody.insertAdjacentHTML('beforeend', row);
    
    //cells creation
    for (var j = 0; j <= 0; j++) //行的數量-1
    {
    //table row creation
    var row = document.createElement("tr");
 
         for (var i = 0; i <2; i++) //列的數量
         {
     //create element <td> and text node 
     //Make text node the contents of <td> element
     //put <td> at end of the table row
             var cell = document.createElement("td"); 
            
             if(i==0)
             {
                 var cellText = document.createTextNode(name); 
             }
             if(i==1)
             {
                 var cellText = document.createTextNode(email);
             }
             cell.appendChild(cellText);
             row.appendChild(cell);  
         }
    //row added to end of table body
        tblBody.appendChild(row);   
    }
    
    //append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    //put <table> in the <body>
    body.appendChild(tbl);
    //tbl border attribute to 
    tbl.setAttribute("border","2");
}
// tbl.appendChild(tblBody);
// //put <table> in the <body>
// body.appendChild(tbl);
// //tbl border attribute to 
// tbl.setAttribute("border","2");

function creatTable(data){
  //這個函式的引數可以是從後臺傳過來的也可以是從其他任何地方傳過來的
  //這裡我假設這個data是一個長度為5的字串陣列 我要把他放在表格的一行裡面，分成五列
  var tableData="<tr>"
  //動態增加5個td,並且把data陣列的五個值賦給每個td
  for(var i=0;i<data.length;i++){
   tableData+="<td>"+data[i]+"</td>"
  }
  tableData+="</tr>"
  //現在tableData已經生成好了，把他賦值給上面的tbody
  $("#tbody1").html(tableData)
 }


function tableCreate(){
  var body = document.body,
      tbl  = document.createElement('table');
  tbl.style.width  = '100px';
  tbl.style.border = '1px solid black';

  for(var i = 0; i < 1; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < 2; j++){
          if(i == 2 && j == 1){
              break;
          } else {
              var td = tr.insertCell();
              td.appendChild(document.createTextNode('Cell'));
              td.style.border = '1px solid black';
              if(i == 1 && j == 1){
                  td.setAttribute('rowSpan', '2');
              }
          }
      }
  }
  body.appendChild(tbl);
}
// function createTable(rows,lines)
// {
//     this.rows=rows;
//     this.lines=lines;
//     var Body=document.getElementById(‘body’);
//     var Table=document.createElement(‘table’);
//     Table.setAttribute(‘border’,1);
//     for(var i=0;i<this.rows;i ){
//         var row=Table.insertRow(i);
//         for(var j=0;j<this.lines;j ){
//             var cells=row.insertCell(j);
//             cells.innerHTML=i ‘,’ j
//         }
//     }
//     Body.appendChild(Table);
// }
// var num = document.getElementById("table").rows.length;
// // Tr 的 .insertRow 就是在 table 欄位中新增一個 Row num 表示新增在最後一筆
// var Tr = document.getElementById("table").insertRow(num);
// // Td 的.insertCell 在 Tr中新增一個 td Tr.cells.length 在Tr中 Td最後欄位新增一個Td 
// Td = Tr.insertCell(Tr.cells.length);



