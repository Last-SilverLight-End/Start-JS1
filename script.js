window.addEventListener('DOMContentLoaded',buildCal);


let today = new Date();
let date = new Date();


function prevCal(){
    today = new Date(today.getFullYear(),today.getMonth()-1,today.getDate());
    buildCal();
}

function nextCal(){
    today =  new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
    buildCal();
}

function buildCal(){
    let doMonth = new Date(today.getFullYear(),today.getMonth(),1); // 첫째날
    let lastDate = new Date(today.getFullYear(),today.getMonth()+1,0); // 이번 마지막 날
    let tbCal = document.getElementById("WholeCalendar");
    let tbCalendarYM = document.getElementById("tbCalendarYM");

    tbCalendarYM.textcontent=today.getFullYear()+"년"+(today.getMonth()+1) +"월";
    tbCalendarYM.innerHTML=today.getFullYear()+"년"+(today.getMonth()+1) +"월";
    
    console.log(tbCalendarYM);

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




