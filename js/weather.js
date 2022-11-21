let currentTime = new Date();

function formatDate(greenwhichMeanTime) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // let months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];

  let dateTime = document.querySelector("#date-time");

  // let currentYear = greenwhichMeanTime.getFullYear();
  let currentDay = days[greenwhichMeanTime.getDay()]; // Map
  // let currentMonth = months[greenwhichMeanTime.getMonth()]; // Map
  let currentDate = greenwhichMeanTime.getDate();
  let hour = greenwhichMeanTime.getHours();
  let minutes = greenwhichMeanTime.getMinutes();

  dateTime.innerHTML = `${currentDay},  ${currentDate},  ${hour}:${minutes} `;

  return dateTime;
}

formatDate(currentTime);

// 🕵️‍♀️Feature #2
const search = function (event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h1 = document.querySelector("#city-name");
  h1.innerHTML = `${searchInput.value}`;
};

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);
