let url ='  https://api.openweathermap.org/data/2.5/weather?q=iseyin&units=metric&appid=d7c0bb775441adcc1f3dcea6a20bd261'

// https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={d7c0bb775441adcc1f3dcea6a20bd261}'

// form and other element
const form = document.getElementById('form_search');
let search = form['search']
let temp = ''
let pressure = ''
let text = ''
let elements=''
let weather_condition = ''
let humidity = ''
let country = ''
let temp_range = ''




// functions

// get id and display function
function getid(id, display) {
    id = document.getElementById(id)
    id.innerHTML = display
}
async function weather(city){
let data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city +'&units=metric&appid=d7c0bb775441adcc1f3dcea6a20bd261');
    console.log(data);
    if (search.value.trim() !='') {
        // city error
        // if(data.length ===0  ){
        //    getid('error', "Invalid City Name")
        // }else{}
      
        text = ' <i class="fas fa-map-marker-alt"> ' + data.data['name']+ "   " + data.data.sys.country +' </i>'  
        console.log(data.data.sys.country)
      
        elements = '<span style="padding:0 40px;"><b><i class="fas fa-temperature-high"></i>+' + data.data.main.temp +  '</b> </span>' +
       '  <span><b><i class="fas fa-cloud"></i> ' +data.data.weather[0].main +  '</b>   </span> <br><span class="px-5  text-dark "><b>' + data.data.weather[0].description+ '</b></span>'
    
        temp_range = 'Temp Range :' +data.data.main.temp_min + ' / ' +  data.data.main.temp_max ;
        pressure = 'Pressure: ' + data.data.main['pressure']
        humidity =  'Humidity : ' + data.data.main['humidity']


        getid("elements", elements)
        getid("city", text)  
        getid("temp_range", temp_range)
        getid("pressure", pressure) 
        getid("humidity", humidity)  

    }else{
        getid('error', "Field cannot be empty");
    } 
}

// weather(town)
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    weather(search.value)
    console.log(search.value);
})
// axios.get(url)
// .then(data=>{
//     console.log(data)
// }).catch(error =>{
//     console.log(error)
// })