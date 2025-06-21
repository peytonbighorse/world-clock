const losAngelesElement = document.querySelector("#los-angeles");
const losAngelesDate = losAngelesElement.querySelector(".date");
const losAngelesTime = losAngelesElement.querySelector(".time");

const denverElement = document.querySelector("#denver");
const denverDate = denverElement.querySelector(".date");
const denverTime = denverElement.querySelector(".time");

losAngelesDate.innerHTML = moment()
  .tz("America/Los-Angeles")
  .format("MMMM D, YYYY");

function updateLATime() {
  losAngelesTime.innerHTML = moment()
    .tz("America/Los-Angeles")
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
}
updateLATime();
setInterval(updateLATime, 1000);

function updateDenverTime() {
  denverDate.innerHTML = moment().tz("America/Denver").format("MMMM D, YYYY");

  denverTime.innerHTML = moment()
    .tz("America/Denver")
    .format(`hh:mm:ss [<span class="am-pm">]A[</span>]`);
}
updateDenverTime();
setInterval(updateDenverTime, 1000);
