window.addEventListener('DOMContentLoaded',buildCal);


let today = new Date();
let date = new Date();
let day = new Date();

function prevCal(){
    today = new Date(today.getFullYear(),today.getMonth()-1,today.getDate());
    buildCal();
}
 // 반쯤 구글링 
function nextCal(){
    today =  new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
    buildCal();
}

function buildCal(){
    let doMonth = new Date(today.getFullYear(),today.getMonth(),1); // 첫째날
    let lastDate = new Date(today.getFullYear(),today.getMonth()+1,0); // 이번 마지막 날
    let tbCal = document.getElementById("WholeCalendar");
    let tbCalendarYM = document.getElementById("tbCalendarYM");

   // tbCalendarYM.textcontent=today.getFullYear()+"년"+(today.getMonth()+1) +"월";
    tbCalendarYM.innerHTML=today.getFullYear()+"년"+(today.getMonth()+1) +"월";
    while(tbCal.rows.length>2){
        tbCal.deleteRow(tbCal.rows.length-1);
    }
    let row=null;

    row=tbCal.insertRow();
    let cnt=0;
    for(i=0; i<doMonth.getDay(); i++)
    {
        cell=row.insertCell();
        
        cnt=cnt+1;
    }
    for(i=1; i<=lastDate.getDate(); i++){
        cell=row.insertCell();
        cell.innerHTML=i;
        cnt=cnt+1;

        if(cnt%7==1){
            cell.innerHTML=i;
        }
        if(cnt%7==0){
            cell.innerHTML=i;
            row=WholeCalendar.insertRow();
        }
       
    }
   // console.log(tbCalendarYM);
}

function MakeRand(){
    
}




/*function buildCal(){

    let leftDays=7;
    let setDays=1;
    for(let i=1; i<week; i++){

        let row = Calendar.insertRow(0);
        while(day!=0){
            row.insertCell().innerHTML="";
            day-=1;
            leftDays-=1;
        }
        let nextMonthDate=1;
        while(leftDays!=0){
            if(setDays >lastDate.getDate()){
                row.insertCell().innerHTML = nextMonthDate;
                leftDays-=1;
                nextMonthDate+=1;
            }
            else{
                row.insertCell().innerHTML=setDays;
                setDays+=1;
                leftDays-=1;
            }
        }
        leftDays=7;
    }
}
buildCal();*/




