



const btnHappines = document.getElementById("btn-hapiness");
const btnSdness = document.getElementById("btn-sadness");
const imgSdn = document.querySelector(".img");
btnHappines.addEventListener("click", sayHallo);
btnSdness.addEventListener("click", sadnessB);

function sayHallo() {
   // document.getElementsByClassName("img");
   imgSdn.style.display = "inline";
   btnHappines.disabled = true;
   btnSdness.disabled = false;
}; 

function sadnessB() {
    imgSdn.style.display = "none";
    btnHappines.disabled = false;
    btnSdness.disabled = true;
 }; 
/* btnHappines.addEventListener("click", function sayHallo() {  анонімна функція
    alert("Hello");
};
*/
/*
document.addEventListener('click', createEventForBtn);
function createEventForBtn(selector) {
	const targetItem = selector.target;
	if (targetItem === btnHappines) {
		imgSdn.style.display = 'inline';
		btnHappines.disabled = true;
		btnSdness.disabled = false;
	} else {
		imgSdn.style.display = 'none';
		btnHappines.disabled = false;
		btnSdness.disabled = true;
	}
}
*/

