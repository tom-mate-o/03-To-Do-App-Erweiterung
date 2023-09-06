//Bei CLICK auf den Button, soll der Text aus dem Feld unten in die Liste eingefügt
//werden

//Test um zu sehen ob CLICK funktioniert
document.getElementById("button").addEventListener("click", function(){
    console.log("CLICK");
    addToDo();
});



//Definition der Funktion addToDo
function addToDo(){
    //Text aus Formular wird abgegriffen un der var iputText übergeben
    var inputText = document.getElementById("input").value; 
    if (inputText == ""){
        return; //wenn kein Text eingegeben wurde, wird die Funktion abgebrochen
    } else {
    //var newItem wird erstellt und erstellt ein neues listItem
    var newItem = document.createElement("li");
    // es bekommt die gleiche Klasse wie das bestehende. Für Styling usw...
    newItem.classList.add("list-group-item");
    // das neue ListItem bekommt nun den Text der Variable inputText
    newItem.innerText = inputText;
    // Der Liste wird nun ein neues Child hinzugefüt. --> newItem
    document.getElementById("list").appendChild(newItem);
    //Text im Eingabefeld danach löschen
    document.getElementById("input").value = "";
    }
}

const popoverElement = document.querySelector("#delete");
const popover = new bootstrap.Popover(popoverElement);
const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function(){
    const existingInputField = document.querySelector(".dynamic-input");

    // wenn es kein input field gibt, dann erstelle eins
if (existingInputField == null){
    const inputField = document.createElement("input");
    inputField.classList.add("dynamic-input");
    document.querySelector("#deleteinput").appendChild(inputField);
} else { //wenn es bereits ein input field gibt, dann erzeuge kein zweites
    return;
}
});


document.addEventListener("keydown", function (event) {
  if (event.key == "Enter" && document.querySelector(".dynamic-input")) {
    //wenn Enter gedrückt wird und es ein input field gibt
    const inputField = document.querySelector(".dynamic-input").value.trim(); //dann speichere den Text aus dem input field in der Variable inputField
    //Alle Todos durchsuchen
    const todos = document.querySelectorAll(".list-group-item"); //alle Elemente mit der Klasse list-group-item
    todos.forEach(function (todo) {
      //todo ist ein einzelnes Element aus der Liste
      const todoText = todo.textContent.trim().toLocaleLowerCase(); //Text des Todos in Kleinbuchstaben
      if (todoText == inputField) {
        //wenn der Text des Todos gleich dem Input ist
        todo.remove(); //dann lösche das Todo
      }
    });
    const inputFieldToDelete = document.querySelector(".dynamic-input"); //input field speichern
    inputFieldToDelete.value = ""; //input field leeren

    const inputFieldToRemove = document.querySelector(".dynamic-input");
    inputFieldToRemove.classList.add("blur");
    setTimeout(function () {
        inputFieldToRemove.remove();
    }, 2000);
  }
});







