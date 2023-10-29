const btnEl1 = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "rkYiG/np9V34Xnrzs6vbIQ==4eTXELgMQmYvci4r";

const options = {
  mathod: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";
async function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl1.disabled = true;
  btnEl1.innerText = "Loading";
  const response = await fetch(apiURL, options);
  const data = await response.json();

  btnEl1.disabled = false;
  btnEl1.innerText = "TELL ME A JOKE";
  jokeEl.innerText = data[0].joke;
}
btnEl1.addEventListener("click", getJoke);
