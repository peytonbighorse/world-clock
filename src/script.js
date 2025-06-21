const citySelector = document.querySelector("#city-selector");
const citiesHome = document.querySelector(".cities-home");
const citiesElement = document.querySelector(".cities");

let intervalID;

//Los Angeles Elements
const losAngelesElement = document.querySelector("#los-angeles");
const losAngelesDate = losAngelesElement.querySelector(".date");
const losAngelesTime = losAngelesElement.querySelector(".time");
//Denver Elements
const denverElement = document.querySelector("#denver");
const denverDate = denverElement.querySelector(".date");
const denverTime = denverElement.querySelector(".time");
//Chicago Elements
const chicagoElement = document.querySelector("#chicago");
const chicagoDate = chicagoElement.querySelector(".date");
const chicagoTime = chicagoElement.querySelector(".time");
//New York Elements
const newYorkElement = document.querySelector("#new-york");
const newYorkDate = newYorkElement.querySelector(".date");
const newYorkTime = newYorkElement.querySelector(".time");

//function to update date and time
function updateDateAndTime(dateElement, timeElement, timezone) {
  //Date
  dateElement.innerHTML = moment().tz(timezone).format("MMMM D, YYYY");
  //Time
  timeElement.innerHTML = moment()
    .tz(timezone)
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
}

//Updates Los Angeles info
updateDateAndTime(losAngelesDate, losAngelesTime, "America/Los_Angeles");
setInterval(() => {
  updateDateAndTime(losAngelesDate, losAngelesTime, "America/Los_Angeles");
}, 1000);

//Updates Denver info
updateDateAndTime(denverDate, denverTime, "America/Denver");
setInterval(() => {
  updateDateAndTime(denverDate, denverTime, "America/Denver");
}, 1000);

//Updates Chicago info
updateDateAndTime(chicagoDate, chicagoTime, "America/Chicago");
setInterval(() => {
  updateDateAndTime(chicagoDate, chicagoTime, "America/Chicago");
}, 1000);

//Updates New York info
updateDateAndTime(newYorkDate, newYorkTime, "America/New_York");
setInterval(() => {
  updateDateAndTime(newYorkDate, newYorkTime, "America/New_York");
}, 1000);

function updateCity(event) {
  if (!citiesHome.classList.contains("hidden")) {
    citiesHome.classList.add("hidden");
  }
  if (citiesElement.classList.contains("hidden")) {
    citiesElement.classList.remove("hidden");
  }
  let timezone = event.target.value;
  if (timezone === "local-city") {
    timezone = moment.tz.guess();
  }
  const cityName = timezone.replace("_", " ").split("/")[1];
  const date = moment().tz(timezone).format("MMMM D, YYYY");
  const time = moment()
    .tz(timezone)
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
  citiesElement.innerHTML = `
   <div class="city" id="selected-city">
          <div class="city-left">
            <h2>${cityName}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
          
        </div>
        <button class="all-cities-btn">All Cities</button>`;

  if (intervalID) {
    clearInterval(intervalID);
  }

  const selectedCity = document.querySelector("#selected-city");
  const dateElement = selectedCity.querySelector(".date");
  const timeElement = selectedCity.querySelector(".time");
  updateDateAndTime(dateElement, timeElement, timezone);
  intervalID = setInterval(() => {
    updateDateAndTime(dateElement, timeElement, timezone);
  }, 1000);

  const allCitiesBtn = document.querySelector(".all-cities-btn");
  allCitiesBtn.addEventListener("click", showAllCities);
}

function showAllCities() {
  citiesHome.classList.remove("hidden");
  citiesElement.classList.add("hidden");
}

citySelector.addEventListener("change", updateCity);
