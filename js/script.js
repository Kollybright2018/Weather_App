display_date(); // Date function called check the function below
setInterval(display_time, 1000); // Time function called check the function below

let url =
  "  https://api.openweathermap.org/data/2.5/weather?q=iseyin&units=metric&appid=d7c0bb775441adcc1f3dcea6a20bd261";

// https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={d7c0bb775441adcc1f3dcea6a20bd261}'

// form and other element
const form = document.getElementById("form_search");
let search = form["search"];
let temp = "";
let pressure = "";
let text = "";
let elements = "";
let weather_condition = "";
let humidity = "";
let country = "";
let temp_range = "";
let current_time = "";

// functions

// Display Date Function
function display_date() {
  let date = document.getElementById("date");
  let day = "";
  let mon = "";
  let d = new Date();
  // Arrays of month
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Arrays of days
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  date.innerHTML =
    "<b> Todays," +
    days[d.getDay()] +
    " " +
    d.getDate() +
    " " +
    months[d.getMonth()] +
    " " +
    d.getFullYear() +
    "</b>";
}

//  Display Time Function
function display_time() {
  let t = new Date();
  let time = document.getElementById("time");
  let format = "";
  let hour = t.getHours();
  if (hour > 12) {
    hour -= 12;
    format = "PM";
    time.innerHTML =
      "<b>" +
      hour +
      ":" +
      t.getMinutes() +
      ":" +
      t.getSeconds() +
      format +
      "</b>";
  } else {
    format = "AM";
    time.innerHTML =
      "<b> " +
      t.getHours() +
      ":" +
      t.getMinutes() +
      ":" +
      t.getSeconds() +
      format +
      "</b>";
  }
}

// get id and display function
function getid(id, display) {
  id = document.getElementById(id);
  id.innerHTML = display;
}

// Error message
function errormsg(message) {
  console.log("Invalid input");
  // Change all the output to empty when there is erro
  getid("elements", "");
  getid("city", "");
  getid("temp_range", "");
  getid("pressure", "");
  getid("humidity", "");
  getid("error", message);
  return true;
}

// weather function
async function weather(city) {
  try {
    let data = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=d7c0bb775441adcc1f3dcea6a20bd261"
    );
    text =
      ' <i class="fas fa-map-marker-alt"> ' +
      data.data["name"] +
      "   " +
      data.data.sys.country +
      " </i>";

    console.log(data);
    elements =
      '<span class="px-4"><b><i class="fas fa-temperature-high"></i>+' +
      data.data.main.temp +
      "</b> </span>" +
      '  <span class="px-2"><b><i class="fas fa-cloud"></i> ' +
      data.data.weather[0].main +
      '</b>   </span> <br><span class="px-2"><b>' +
      data.data.weather[0].description +
      "</b></span>";

    temp_range =
      "Temp Range : " +
      data.data.main.temp_min +
      " °c / " +
      data.data.main.temp_max +
      " °c";
    pressure = "Pressure: " + data.data.main["pressure"] + "Hpa";
    humidity = "Humidity : " + data.data.main["humidity"] + "%";
    getid("elements", elements);
    getid("city", text);
    getid("temp_range", temp_range);
    getid("pressure", pressure);
    getid("humidity", humidity);
  } catch (error) {
    errormsg(" <b> <i class='fas fa-exclamation'>  </i> Invalid  Input </b>");
  }
}

// weather(town)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search.value.trim() === "") {
    errormsg(
      " <b> <i class='fas fa-exclamation'>  </i> Field cannot be empty </b>"
    );
  } else {
    getid("error", "");
    weather(search.value);
  }
});
