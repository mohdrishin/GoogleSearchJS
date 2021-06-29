var googleIcon = document.getElementById("googleIcon");
var searchBox = document.getElementById("search-box");
var darkModeOn = document.body;

//searchbox function
googleIcon.onclick = function() {
    searchBox.classList.toggle("active");
}



//darkmode function - myself tried - working
// var inbuilt = document.getElementById("darkmode");

// darkmode.onclick = function() {
//     darkModeOn.style.backgroundColor = "#000"; 
//     document.getElementById("darkmode").innerText = "Dark Mode OFF";
// }



//darkmode second method
darkmodeBtn.onclick = function() {
    darkModeOn.classList.toggle("darkmode-color")
}
