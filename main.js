var googleIcon = document.getElementById("googleIcon");
var searchBox = document.getElementById("search-box");

googleIcon.onclick = function() {
    searchBox.classList.toggle("active");
}