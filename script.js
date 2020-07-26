

// document.getElementById('CurrentMonth').value =new Date().toISOString().slice(0,7);
//document.getElementsByClassName('ViewMonth').value=new Date.prototype.getMonth();
let table = (document.getElementsByClassName('WholeDate'))[0];
let arr = document.getElementsByTagName('td');
//let td=table.getElementsByClassName('WholeDate');
//console.log(ViewMonth);
let CheckMonth=document.getElementsByClassName('ToMonth');
let today= new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth()+1;
CheckMonth.innerHTML=todayMonth;


//let tbody= document.getElementsByTagName('tbody');




//document.getElementsByClassName('ToMonth').innerHTML=todayMonth;

//let 

//for(let i = 0; i<arr.length; i++){
 //   td[i].textContent=i;
//}

console.log(today);
console.log(todayYear);
console.log(todayMonth);

//console.log(tbody);