const C_day = document.getElementById("C_day")
const current_date = document.getElementById("current_date")
const current_month = document.getElementById("current_month")
const submitBtn = document.getElementById("submitBtn")
const C_name = document.getElementById("C_name");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_Status = document.getElementById("temp_Status");
const main_layer = document.querySelector(".middle_layer");
var loader = document.querySelector(".loader");



const info = async (event)=>{
    event.preventDefault();

    if(C_name.value == ""){
        city_name.innerHTML = `Please enter city name for search`;
        main_layer.classList.add("hide")
    }
    else{
        loader.style.display= "block";
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${C_name.value}&appid=61e86084d49526016371f076a6a2dba4`;
            let response = await fetch(url);
            let data = await response.json()
            console.log(data);
            const arrData = [data]
            city_name.innerHTML = arrData[0].name;
            temp.innerHTML = arrData[0].main.temp;
            temp_Status_icon = arrData[0].weather[0].main;
            if(temp_Status_icon == "Clear"){
                
                temp_Status.innerHTML = '<i class="fa fa-sun" style="color: #eccc68"></i>';
            }
            else if(temp_Status_icon == "Smoke"){
                
                temp_Status.innerHTML = `<i class="fa fa-smog" style="color: #a4b0be"></i>`;
            }
            else if(temp_Status_icon == "Rain"){
                
                temp_Status.innerHTML = `<i class="fa fa-cloud-rain" style="color: grey"></i>`;
            }
            else{
                
                temp_Status.innerHTML = `<i class="fa fa-cloud" style="color: #fff"></i>`;
            }

            main_layer.classList.remove("hide")
            loader.style.display= "none";
        }
        catch{
            city_name.innerHTML = `Please enter correct city name `
            main_layer.classList.add("hide")
            loader.style.display= "none";
            
        }
    }
}

submitBtn.addEventListener("click", info)
var months = [ "Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"]

const date = new Date();
current_date.innerHTML = date.getDate();
current_month.innerHTML = months[date.getMonth()];

switch (date.getDay()) {
    case 0:
        C_day.innerHTML = 'Sunday';
        break;
    case 1:
        C_day.innerHTML = 'Monday';
        break;
    case 2:
        C_day.innerHTML = 'Tuesday';
        break;
    case 3:
        C_day.innerHTML = 'Wednesday';
        break;
    case 4:
        C_day.innerHTML = 'Thursday';
        break;
    case 5:
        C_day.innerHTML = 'Friday';
        break;
    case 6:
        C_day.innerHTML = 'Saturday';
        break;

    default:
        break;
}