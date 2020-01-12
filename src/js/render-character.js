function renderCharacter(characters) {
  for (var i = 0; i < characters.length; i++) {
    let card = document.createElement("card");
    dataImage = "../image/" + characters[i].urlFor;
    card.setAttribute("data-image", dataImage);
    card.id = characters[i].name;
    let mainText = document.createElement("h1");
    mainText.slot = "header";
    mainText.innerText = characters[i].name;
    let description = document.createElement("p");
    description.slot = "content";
    description.innerText = characters[i].description;
    card.appendChild(mainText);
    card.appendChild(description);
    document.getElementById("app").appendChild(card);

  }
}
