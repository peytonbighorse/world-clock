const losAngelesElement = document.querySelector("#los-angeles");
const losAngelesDate = losAngelesElement.querySelector(".date");
const losAngelesTime = losAngelesElement.querySelector(".time");

const denverElement = document.querySelector("#denver");
const denverDate = denverElement.querySelector(".date");
const denverTime = denverElement.querySelector(".time");

function updateDateAndTime(dateElement, timeElement, timezone) {
  //Date
  dateElement.innerHTML = moment().tz(timezone).format("MMMM D, YYYY");
  //Time
  timeElement.innerHTML = moment()
    .tz(timezone)
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
}
updateDateAndTime(losAngelesDate, losAngelesTime, "America/Los-Angeles");
setInterval(() => {
  updateDateAndTime(losAngelesDate, losAngelesTime, "America/Los-Angeles");
}, 1000);

updateDateAndTime(denverDate, denverTime, "America/Denver");
setInterval(() => {
  updateDateAndTime(denverDate, denverTime, "America/Denver");
}, 1000);
