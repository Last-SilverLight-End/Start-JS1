

// document.getElementById('CurrentMonth').value =new Date().toISOString().slice(0,7);
//document.getElementsByClassName('ViewMonth').value=new Date.prototype.getMonth();
let table = (document.getElementsByClassName('WholeDate'))[0];
let arr = document.getElementsByTagName('td');
let today= new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth()+1;
//let td=table.getElementsByClassName('WholeDate');
//console.log(ViewMonth);
let CheckMonth=document.getElementsByClassName('ToMonth')[0];
console.log(CheckMonth);
console.log(document.getElementsByClassName('ToMonth')[0]);

CheckMonth.innerHTML=todayMonth;
CheckMonth.textContent=todayMonth;


//let tbody= document.getElementsByTagName('tbody');
//CheckMonth.innerHTML=todayMonth;
//CheckMonth.textContent=todayMonth;
//document.getElementsByClassName('ToMonth').innerHTML=todayMonth;
//let 
//for(let i = 0; i<arr.length; i++){
 //   td[i].textContent=i;
//}
console.log(today);
console.log(todayYear);
console.log(todayMonth);
//console.log(tbody);