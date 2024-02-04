var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function openModal(data) {
    modal.style.display = "flex";
    $("#awards").text(data);
}

modal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}