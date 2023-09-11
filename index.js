const now = new Date();
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const daysList = document.querySelectorAll(".days");

function dateOfFirstDay(month, year){
    daysList.forEach((ele) =>{
        ele.innerHTML = "";
    });
    const total = new Date(`${month + 1} 1, ${year} 23:14:23`);
    const day = total.getDay();
    
    fillDates(day, month, year);
}
function fillDates(day, month, year){
    
    if(month===0 ||
       month===2 ||
       month===4 ||
       month===6 ||
       month===7 ||
       month===9 ||
       month===11
    ){
        let count = 1;
        for(var i = day; i<31 + day; i++){
            if(i >= day){
                daysList[i].innerText = count;
                count++;
            }
        }
    }else if (month == 1){
        let count = 1;
        if(year % 4 ===0){
            for(var i=day; i<29 + day; i++){
                if(i >= day){
                    daysList[i].innerText = count;
                    count++;
                }
            }
        }
    }else{
        let count = 1;
        for(var i=day; i<30+day; i++){
            if(i >= day){
                daysList[i].innerText = count;
                count++;
            }
        }
    }
    highLightColor(date);
}
    dateOfFirstDay(month,year);

    function highLightColor(date){
        daysList.forEach((ele)=>ele.classList.remove("active"))
        daysList.forEach((ele) =>{
            if(ele.innerText == date){
                ele.classList.add("active");
            }
        });
    }

    function fillingYears(){
        const yearList = document.querySelector("#selectYear");
        for(let i=1950; i<2100; i++){
            const option = document.createElement("option")
            option.innerText = i;
            yearList.appendChild(option);
        }
    }
    fillingYears();

    function takeinputs(){
        const month = document.querySelector("#selectMonth").value;
        const year = document.querySelector("#selectYear").value;
        if(month==="Select Month"){
            const newMonth = new Date().getMonth();
            dateOfFirstDay(+newMonth, +year);
        }else if(year === "Select Year"){
            const newYear = new Date().getFullYear();
            dateOfFirstDay(+month, +newYear);
        }else{
            dateOfFirstDay(+month, +year);
        }    
    }

    document.querySelector("#selectMonth").addEventListener("change",takeinputs);
    document.querySelector("#selectYear").addEventListener("change",takeinputs);

    const button = document.querySelector(".submit");
    button.addEventListener("click",()=>{
    let enterDate = document.getElementById("enterDate").value;
        highLightColor(enterDate);
        enterDate = "";
    })