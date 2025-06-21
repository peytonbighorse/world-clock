const citySelector = document.querySelector("#city-selector");
const citiesElement = document.querySelector(".cities");

//Los Angeles Elements
const losAngelesElement = document.querySelector("#los-angeles");
const losAngelesDate = losAngelesElement.querySelector(".date");
const losAngelesTime = losAngelesElement.querySelector(".time");
//Denver Elements
const denverElement = document.querySelector("#denver");
const denverDate = denverElement.querySelector(".date");
const denverTime = denverElement.querySelector(".time");

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

function updateCity(event) {
  const timezone = event.target.value;
  const cityName = timezone.replace("_", " ").split("/")[1];
  const date = moment().tz(timezone).format("MMMM D, YYYY");
  const time = moment()
    .tz(timezone)
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
  citiesElement.innerHTML = `
   <div class="city" id="los-angeles">
          <div class="city-left">
            <h2>${cityName}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>`;
}

citySelector.addEventListener("change", updateCity);
