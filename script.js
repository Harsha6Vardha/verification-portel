// Fade Animation
window.onload = function () {

    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {
        document.querySelector(".container").style.transition = "1s";
        document.querySelector(".container").style.opacity = "1";
    }, 200);

};

// VERIFIED Button Animation
const btn = document.querySelector(".verified-btn");

btn.addEventListener("mouseover", function () {

    btn.style.transform = "scale(1.08)";
    btn.style.transition = "0.3s";

});

btn.addEventListener("mouseout", function () {

    btn.style.transform = "scale(1)";

});

// Certificate ID Copy
const certificateID = document.querySelector(".card h2");

certificateID.style.cursor = "pointer";

certificateID.title = "Click to Copy";

certificateID.addEventListener("click", function () {

    navigator.clipboard.writeText(certificateID.innerText);

    alert("Certificate ID Copied Successfully!");

});