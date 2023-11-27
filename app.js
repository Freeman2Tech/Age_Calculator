const dob = document.querySelector("#dob");
const ageCon = document.querySelector(".ageContainer");
const date = new Date();

const update = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  if (hours.toString().length === 1) {
    hours = `0${date.getHours()}`;
  } else {
    hours;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${date.getHours()}`;
  } else {
    minutes;
  }
  if (sec.toString().length === 1) {
    sec = `0${date.getSeconds()}`;
  } else {
    sec = `${sec}`;
  }

  document.querySelector(
    "#date"
  ).textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  document.querySelector("#time").textContent = `${hours}:${minutes}:${sec}`;
};
setInterval(update, 1000);

document.querySelector("button").addEventListener("click", (e) => {
  if (dob.value) {
    document.querySelector(".ageInfo").classList.add("hidden");
    if (
      dob.value.length < 4 ||
      dob.value.length > 4 ||
      dob.value > date.getFullYear()
    ) {
      document.querySelector("#age").textContent = "Invalid Date Of Birth";
      ageCon.classList.remove("hidden");
    } else {
      let age = date.getFullYear() - parseInt(dob.value);
      if (age <= 1) {
        age = `${age}year`;
      } else {
        age = `${age}years`;
      }
      document.querySelector("#age").textContent = age;

      document.querySelector("input").value = "";
      ageCon.classList.remove("hidden");
    }
  }
});
