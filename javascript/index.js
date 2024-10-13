function updateTime() {
  //Brussels
  let brusselsElement = document.querySelector("#brussels");
  if (brusselsElement) {
    let brusselsDateElement = brusselsElement.querySelector(".date");
    let brusselsTimeElement = brusselsElement.querySelector(".time");
    let brusselsTime = moment().tz("Europe/Brussels");
    brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
    brusselsTimeElement.innerHTML = `${brusselsTime.format(
      `h:mm:ss`
    )} <small>${brusselsTime.format("A")}</small>`;
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTime.format(
      `h:mm:ss`
    )} <small>${tokyoTime.format("A")}</small>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">Go back</a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
