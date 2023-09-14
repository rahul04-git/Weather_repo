
var City = 'delhi';
submit.addEventListener('click', () => {
    City = document.getElementById('city').value;
    getData(City);
})
getData(City);
function monthInword(number) {
    if (number == '01') {
        return 'Jan';
    }
    else if (number == '02') {
        return 'feb';
    }
    else if (number == '03') {
        return 'March';
    }
    else if (number == '04') {
        return 'April';
    }
    else if (number == '05') {
        return 'May';
    }
    else if (number == '06') {
        return 'June';
    }
    else if (number == '07') {
        return 'July';
    }
    else if (number == '08') {
        return 'Aug';
    }
    else if (number == '09') {
        return 'Sept';
    }
    else if (numeber == '10') {
        return 'Oct';
    }
    else if (numeber == '11') {
        return 'Nov';
    }
    else {
        return 'Dec';
    }
}
function getData(City) {
    const forecast = fetch('http://api.weatherapi.com/v1/forecast.json?key=8b91574692794462b3d61646230809&q=' + City + '&aqi=no');
    forecast.then(async (value) => {
        return await value.json();
    }).then((value) => {

        /* current date and time */
        const date_time = value.current.last_updated.split(" ");
        const current_date_yymmdd = date_time[0].split("-");
        const current_Month = current_date_yymmdd[1];
        const current_Date = current_date_yymmdd[2];
        document.getElementById('current_date').innerHTML = current_Date;
        document.getElementById('current_month').innerHTML = monthInword(current_Month);

        /* city name */

        const city_Name = value.location.name;
        document.getElementById('city_name').innerHTML = city_Name;

        /* current icon */

        const current_Icon = value.current.condition.icon;
        document.getElementById('current_icon').src = "https:" + current_Icon;

        /* current desc */

        const current_Desc = value.current.condition.text;
        document.getElementById('current_desc').innerHTML = current_Desc;

        /* current humidity */

        const current_Hum = value.current.humidity;
        document.getElementById('current_hum').innerHTML = current_Hum;

        /* sunrise sunset moonrise moonset */

        const current_Sunrise =value.forecast.forecastday[0].astro.sunrise;
        document.getElementById('current_sunrise').innerHTML = current_Sunrise

        const current_Sunset = value.forecast.forecastday[0].astro.sunset ;
        document.getElementById('current_sunset').innerHTML = current_Sunset;

        const  current_Moonrise = value.forecast.forecastday[0].astro.moonrise;
        document.getElementById('current_moonrise').innerHTML = current_Moonrise

        const current_Moonset = value.forecast.forecastday[0].astro.moonset;
        document.getElementById('current_moonset').innerHTML = current_Moonset



        /* current temperature */

        const current_Temp = value.current.temp_c;
        document.getElementById('current_temp').innerHTML = current_Temp;

        /* current wind speed */

        const current_WindSpeed = value.current.wind_kph;
        document.getElementById('current_windSpeed').innerHTML = current_WindSpeed;

        /* hourly update */
        for (let i = 0; i < 24; i++) {

            if (i == 1 || i == 4 || i == 7 || i == 10 || i == 13 || i == 16 || i == 19 || i == 22) {

                /* description */
                const Desc = value.forecast.forecastday[0].hour[i].condition.text;
                document.getElementById('desc_' + i.toString()).innerHTML = Desc;

                /* icon */
                const Icon = value.forecast.forecastday[0].hour[i].condition.icon;
                document.getElementById('icon_' + i.toString()).src = "https:" + Icon;

                /* temperature */
                const Temp = value.forecast.forecastday[0].hour[i].temp_c;
                document.getElementById('temp_' + i.toString()).innerHTML = Temp;

                /* humidity */
                const Hum = value.forecast.forecastday[0].hour[i].humidity;
                document.getElementById('hum_' + i.toString()).innerHTML = Hum;

                /* visibility */
                const WindSpeed = value.forecast.forecastday[0].hour[i].wind_kph;
                document.getElementById('windSpeed_' + i.toString()).innerHTML = WindSpeed;
            }

        }


    })
}






/* swiper */

const width = window.outerWidth;
const arr = [document.querySelector('.box-1'), document.querySelector('.box-2'), document.querySelector('.box-3'), document.querySelector('.box-4'), document.querySelector('.box-5'), document.querySelector('.box-6'), document.querySelector('.box-7'), document.querySelector('.box-8')];
if (width >= 1465) {
    document.querySelector('.box-1').style.display = 'none'
    document.querySelector('.box-8').style.display = 'none'
    var arr_prev = [arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]];
}
else if (width>1376){
    document.querySelector('.box-1').style.display = 'none';
    document.querySelector('.box-2').style.display = 'none';
    document.querySelector('.box-8').style.display = 'none';
    var arr_prev=[arr[2],arr[3],arr[4],arr[5],arr[6]];
}
else if(width>=1115){
    document.querySelector('.box-1').style.display = 'none';
    document.querySelector('.box-2').style.display = 'none';
    document.querySelector('.box-8').style.display = 'none';
    document.querySelector('.box-7').style.display = 'none';
    var arr_prev=[arr[2],arr[3],arr[4],arr[5]]
}
else if(width>=852){
    document.querySelector('.box-1').style.display = 'none';
    document.querySelector('.box-2').style.display = 'none';
    document.querySelector('.box-3').style.display = 'none';
    document.querySelector('.box-7').style.display = 'none';
    document.querySelector('.box-8').style.display = 'none';
    var arr_prev=[arr[3],arr[4],arr[5]];
}
else if(width>=589){
    document.querySelector('.box-1').style.display = 'none';
    document.querySelector('.box-2').style.display = 'none';
    document.querySelector('.box-3').style.display = 'none';
    document.querySelector('.box-6').style.display = 'none';
    document.querySelector('.box-7').style.display = 'none';
    document.querySelector('.box-8').style.display = 'none';
    var arr_prev=[arr[3],arr[4]];
}
else{
    document.querySelector('.box-1').style.display = 'none';
    document.querySelector('.box-2').style.display = 'none';
    document.querySelector('.box-3').style.display = 'none';
    document.querySelector('.box-4').style.display = 'none';
    document.querySelector('.box-6').style.display = 'none';
    document.querySelector('.box-7').style.display = 'none';
    document.querySelector('.box-8').style.display = 'none';
    var arr_prev=[arr[4]];
}
document.querySelector('.prev').addEventListener('click', () => {

    document.querySelector('.next-icon').style.color='black';
    document.querySelector('.next').disabled = false;
    if (arr[arr.indexOf(arr_prev[0])-1]==arr[0]){
        document.querySelector('.prev-icon').style.color='#61677A';
        document.querySelector('.prev').disabled = true ;
    }
    else{
        document.querySelector('.prev').style.display='inline-block'
    }
    arr_prev.unshift(arr[arr.indexOf(arr_prev[0])-1]);
    arr_prev[arr_prev.length-1].style.display='none';
    arr_prev[0].style.display='flex';
    arr_prev.pop();

})
document.querySelector('.next').addEventListener('click', () => {

    document.querySelector('.prev-icon').style.color='black';
    document.querySelector('.prev').disabled = false ;
    arr_prev[0].style.display='none';
    arr_prev.push(arr[arr.indexOf(arr_prev[arr_prev.length-1])+1]);
    arr_prev[arr_prev.length-1].style.display='flex';
    arr_prev.shift();
    if(arr_prev[arr_prev.length-1]==arr[arr.length-1]){
        /* document.querySelector('.next-icon').style.color='#61677A'; */
        document.querySelector('.next').disabled = true;
    }
    else{
        document.querySelector('.next').style.display='inline-block'
    }

})
window.onresize = () => { window.location.reload()}

