// written on Umer's MacBook Pro
var typed = new Typed('#hello-world', {
    strings: [
        "Hello, World!",
        "سلام دنيا",
        "Bonjour Monde!",
        "こんにちは世界",
        "Hello, World!"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    showCursor: true,
    cursorChar: "𝖨"
});

let load;

if (document.getElementById("loader").visibility = "visible") {
    document.getElementById("content").style.display = "none";
}

function loadPage() {
    load = setTimeout(showPage, Math.floor(Math.random() * (2000 - 800) + 800)); // random load-time in b/w 250 ms - 2000 ms to give appearance of real load-time

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.home')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// Open the modal (show the popup)
function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

// Close the modal (hide the popup)
function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Handle button click to open the modal
document.getElementById('contactButton').addEventListener('click', openModal);
