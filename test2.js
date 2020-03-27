// var sad = "Goodbye";
// var bloke = "World";
// alert(sad + " " + bloke);



window.onload=function processFormData(e) {
  const submitBtn = document.querySelector('[data-action="submit"]');
  submitBtn.addEventListener("click", processFormData);
  
  var a1=document.createElement("table");
  var a2=document.createElement("tbody");
  var a3=document.createElement("tr");
  var a4=document.createElement("td");
  //開始appendchild()追加各個元素
  a3.appendChild(a4);
  a2.appendChild(a3);
  a1.appendChild(a2); 

  

  // 方法 1-1：getElementById - 從 input
  // const nameElement = document.getElementById("name");
  // const name = nameElement.value;
  // const emailElement = document.getElementById("email");
  // const email = emailElement.value;

  // 方法 1-2：getElementById - 從 form
  // const formElement = document.getElementById("form");
  // const name = formElement[0].value;
  // const email = formElement[1].value;

 

  // 方法 2：getElementsByTagName
  
  // const inputElement = document.getElementsByTagName('input');
  // const name = inputElement[0].value;
  // const email = inputElement[1].value;

  // 方法 3：getElementsByName
  // const nameElement = document.getElementsByName('name');
  // const name = nameElement[0].value;
  // const emailElement = document.getElementsByName('email');
  // const email = emailElement[0].value;

  // 方法 4：取得表單元素
  //取得 name 屬性為 form 的表單
  const form = document.forms['form'];
  //取 elements 集合中 name 屬性為 name 的值
  // const name = form.elements.name.value;
  //取 elements 集合中 name 屬性為 email 的值
  // const cellphone = form.elements.cellphone.value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("cellphone").value;
  
  var tdName = document.getElementById('aName');
  tdName.innerText = name;

  var tdPhone = document.getElementById('aPhone');
  tdPhone.innerText = phone;
  // alert("你的姓名是 " + name + "\n電話是 " + cellphone);
  

}
