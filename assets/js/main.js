
function good(){
    // Variablen werden Definiert, hier wird die id von Html bezogen
    let emojiObject             = document.getElementById("emoji");
    let textObject              = document.getElementById("feeling");

    // Wenn emojiObject startIcon hat, dann ändere das Icon, den Text und die Farbe
    if (emojiObject.className == "bi bi-emoji-neutral-fill") {
        emojiObject.className = "bi bi-emoji-sunglasses-fill";
        emojiObject.style.color     = "green";
        textObject.innerHTML        = "You are Feeling Good"
        textObject.style.color      = "green";
      } else {
        emojiObject.className = "bi bi-emoji-neutral-fill";
      }
}

function neutral(){
    // Variablen werden Definiert, hier wird die id von Html bezogen
    let emojiObject             = document.getElementById("emoji");
    let textObject              = document.getElementById("feeling");

    // Wenn emojiObject startIcon hat, dann ändere das Icon, den Text und die Farbe
    if (emojiObject.className == "bi bi-emoji-neutral-fill") {
        emojiObject.className = "bi bi-emoji-expressionless";
        emojiObject.style.color     = "white";
        textObject.innerHTML        = "You are Feeling So-La-La"
        textObject.style.color      = "black";
      } else {
        emojiObject.className = "bi bi-emoji-neutral-fill";
      }
}

function bad(){
    // Variablen werden Definiert, hier wird die id von Html bezogen
    let emojiObject             = document.getElementById("emoji");
    let textObject              = document.getElementById("feeling");
    emojiObject.style.color     = "red";
    textObject.innerHTML        = "You are Feeling Bad"
    textObject.style.color      = "red";

    // Wenn emojiObject startIcon hat, dann ändere das Icon, den Text und die Farbe
    if (emojiObject.className == "bi bi-emoji-neutral-fill") {
        emojiObject.className = "bi bi-emoji-dizzy-fill";
        emojiObject.style.color     = "red";
        textObject.innerHTML        = "You are Feeling Bad"
        textObject.style.color      = "red";
      } else {
        emojiObject.className = "bi bi-emoji-neutral-fill";
      }
}

