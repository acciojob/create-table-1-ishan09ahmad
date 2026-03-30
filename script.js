let tableEl=document.querySelector("#sampleTable");
function insert_Row() {

let newrowEl=document.createElement("tr");
	let newCell1=document.createElement("td");
  newCell1.textContent="New Cell1"
	let newCell2=document.createElement("td");
   newCell2.textContent="New Cell2"
	newrowEl.appendChild(newCell1);
	newrowEl.appendChild(newCell2);
	tableEl.prepend(newrowEl)
}

