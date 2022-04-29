let url ='  https://api.openweathermap.org/data/2.5/weather?q=iseyin&units=metric&appid=d7c0bb775441adcc1f3dcea6a20bd261'

// https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={d7c0bb775441adcc1f3dcea6a20bd261}'



axios.get(url)
.then(data=>{
    console.log(data)
}).catch(error =>{
    console.log(error)
})