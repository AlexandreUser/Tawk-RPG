var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function openModal(character,characterName){
  document.getElementsByClassName("card-bg")[4].style["background-image"] = "url('../image/"+character+"')"
  modal.style.display = "block";

}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}