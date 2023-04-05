// api
const API = "https://randomuser.me/api/?results=10";

// for leader
const overlay = document.getElementById("overlay");

// Get Users from API
const getData = (resourse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        overlay.classList.remove("hidden");
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        overlay.classList.add("hidden");
      } else if (request.readyState === 4) {
        reject("Error!");
        overlay.classList.add("hidden");
      }
    });

    request.open("GET", resourse);
    request.send();
  });
};

const Loader = () => {
  getData(API)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener('DOMContentLoaded', Loader)