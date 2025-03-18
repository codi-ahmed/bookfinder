const findbtn = document.getElementById("findbtn");
const uploadbtn = document.getElementById("uploadbtn");



findbtn.addEventListener("click", function () {
    window.location.href = "/find"; // Redirect to upload page
});

uploadbtn.addEventListener("click", function () {
    window.location.href = "/upload"; // Redirect to upload page
});