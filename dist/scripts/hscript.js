// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}