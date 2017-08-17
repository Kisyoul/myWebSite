$(function () { $("[data-toggle='popover']").popover(); });

if (!localStorage.getItem('name')){
   setUserName(); 
}else{
    
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
}