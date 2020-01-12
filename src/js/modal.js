var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function openModal(character, characterList) {
  try {
    for (var i = 0; characterList.length; i++) {
      if (character === characterList[i].name) {
        document.getElementsByClassName("card-bg")[characterList.length].style[
          "background-image"
        ] = "url(../image/" + characterList[i].urlFor + ")";

        document.getElementsByClassName("card-info")[
          characterList.length
        ].innerHTML = "<h1>" + characterList[i].name + "</h1>";

        document.getElementsByClassName("card-info")[
          characterList.length
        ].innerHTML += "<p>" + characterList[i].description + "</p>";
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }

  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
