const dob = document.querySelector(".date");
const ageCon = document.querySelector(".ageContainer");

const update = () => {
  const date = new Date();
  const period = date.getHours() > 12 ? "PM" : "AM";
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();

  if (hours.toString().length === 1) {
    hours = `0${hours}`;
  } else {
    hours;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  } else {
    minutes;
  }
  if (sec.toString().length === 1) {
    sec = `0${sec}`;
  } else {
    sec = `${sec}`;
  }

  document.querySelector("#date").textContent = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  document.querySelector(
    "#time"
  ).textContent = `${hours}:${minutes}:${sec} ${period}`;
};
setInterval(update, 1000);

document.querySelector("button").addEventListener("click", () => {
  const date = new Date();

  let bdMsg = document.querySelector(".bdMsg");
  let currMonth = date.getMonth() + 1;
  if (dob.value) {
    document.querySelector(".ageInfo").classList.add("hidden");
    if (
      dob.value.slice(0, 4).length < 4 ||
      dob.value.slice(0, 4).length > 4 ||
      (parseInt(dob.value.slice(0, 4)) == date.getFullYear() &&
        parseInt(dob.value.slice(8, 10)) > date.getDate() &&
        parseInt(dob.value.slice(5, 7)) == currMonth)
    ) {
      document.querySelector("#age").textContent = "Invalid Date Of Birth";
      ageCon.classList.remove("hidden");
      bdMsg.classList.add("hidden");
    } else if (
      parseInt(dob.value.slice(0, 4)) == date.getFullYear() &&
      parseInt(dob.value.slice(8, 10)) <= date.getDate() &&
      parseInt(dob.value.slice(5, 7)) == currMonth
    ) {
      let day = date.getDate() - parseInt(dob.value.slice(8, 10));
      bdMsg.textContent = `Happy ${day} ${day > 1 ? "days" : "day"} old`;
    } else {
      let age = date.getFullYear() - parseInt(dob.value.slice(0, 4));
      let dobMonth;

      bdMsg.classList.remove("hidden");

      if (parseInt(dob.value.slice(5, 7)) > currMonth) {
        dobMonth = parseInt(dob.value.slice(5, 7)) - currMonth;
        bdMsg.textContent = `Your Birthday is ${dobMonth} ${
          dobMonth > 1 ? "Months" : "Month"
        } Away. Happy Birthday in Advance!!!`;
      } else if (parseInt(dob.value.slice(5, 7)) == currMonth) {
        bdMsg.textContent = `It's Your Month, Happy ${age} Birthday To You!!!`;
      } else {
        dobMonth = currMonth - parseInt(dob.value.slice(5, 7));
        bdMsg.textContent = `Congratulations at Your ${age} Birthday. You Already Celeberated Your Birthday ${dobMonth} ${
          dobMonth > 1 ? "Months" : "Month"
        } Back. Happy Belated Birthday!!!`;
      }
      age <= 1 ? (age = `${age}year`) : (age = `${age}years`);

      document.querySelector("#age").textContent = age;

      document.querySelector("input").value = "";
      ageCon.classList.remove("hidden");
    }
  }
});
