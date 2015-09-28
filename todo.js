
function removeItem(thisone) {
	console.log("here");
	console.log(thisone);
	var thisId = thisone.id;
	document.getElementById(thisone.id).style.display = "none";
	console.log(thisId);
}

function addNewItem(list, itemText) {
	totalItems++;

	var listItem = document.createElement("li");
	listItem.className="list-group-item";
	listItem.style.width="200px";
	listItem.style.marginLeft="8px";
	listItem.style.marginBottom="1px";
	listItem.innerText = itemText;
	listItem.id = "li_" + totalItems;


	
	
	console.log(listItem.id);
	list.appendChild(listItem);





	listItem.ondblclick = function(){
		var thisthis = this;
		console.log(thisthis);
		var remove = prompt("Are u sure? Type Yes/No");
		if(remove == "y" || remove == "Yes" || remove == "yes" || remove == "YES" || remove =="Y")
		{
			console.log(this);
		removeItem(thisthis);

		}


}
}

var totalItems = 0;

var theItemText = document.getElementById("ItemText");	
theItemText.focus()

var btnNew= document.getElementById("btnAdd");
btnNew.onclick = function(){

	
	var itemText = ItemText.value;

	// var itemText = prompt("add here");
	if (!itemText || itemText == "" || itemText == " ") {
		return false;
	};

	addNewItem(document.getElementById("todoList"), itemText);
} ;