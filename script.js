//window.addEventListener('DOMContentLoaded',main);
let today=new Date();
let date = new Date();
todayYear = today.getFullYear();
todayMonth = today.getMonth()+1;
document.getElementsByClassName('ToMonth').innerHTML=todayMonth;
let firstDate= new Date(today.getFullYear(),today.getMonth(),1);
let lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
let day= firstDate.getDay();
let Calendar = document.getElementsByClassName('WholeDate');
let week=Math.ceil(lastDate.getDate()/7)+1;
//console.log(day);


/*function prevCal(){

}

function main(){
   // console.log("1");
   let table = (document.getElementsByClassName('WholeDate'))[0];
   let arr= document.getElementsByTagName('td');
   let todayMonth = today.getMonth()+1;
   let CheckMonth = document.getElementsByClassName('ToMonth')[0];
   let CheckDate = document.getElementsByClassName('ViewDate');
   CheckMonth.innerHTML=todayMonth;
   CheckMonth.textContent=todayMonth+"월";
   
    //console.log('DOM fully loaded and parsed');

   // console.log("2");
   

}*/



