function updateTime() {
  //Brussels
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");
  let brusselsTime = moment().tz("Europe/Brussels");
  brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = `${brusselsTime.format(
    `h:mm:ss`
  )} <small>${brusselsTime.format("A")}</small>`;

  //Paris
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    `h:mm:ss`
  )} <small>${tokyoTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
