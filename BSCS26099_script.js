window.onload = function() {
    alert("Welcome to the website!");
    document.getElementById("Year").textContent = new Date().getFullYear();
}
function CheckAvailability(status) {
    if (status == "In stock") {
        alert("Product is in stock!");
    }
    else {
        alert("Product is not available!");
    }
}