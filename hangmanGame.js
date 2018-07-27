console.log("Heyheyhey");
let btnArr = document.querySelectorAll(".alphabetSection button");
for (var i = btnArr.length - 1; i >= 0; i--) {
	let current = btnArr[i];
	current.addEventListener("click", () => {
    alert(current.innerText.charAt(0))
  });
}

let btnArr2 = document.querySelectorAll(".bottom button");
for (var i = btnArr2.length - 1; i >= 0; i--) {
	let current = btnArr2[i];
	current.addEventListener("click", () => {
    alert(current.innerText)
  });
}
