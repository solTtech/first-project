



const btnHappines = document.getElementById("btn-hapiness");
const btnSdness = document.getElementById("btn-sadness");
const imgSdn = document.querySelector(".img");
btnHappines.addEventListener("click", trigger);
btnSdness.addEventListener("click", trigger);

function trigger() {
   // document.getElementsByClassName("img");
   imgSdn.classList.toggle("show");
   btnHappines.disabled = !btnHappines.disabled;
   btnSdness.disabled = !btnSdness.disabled;
}; 

