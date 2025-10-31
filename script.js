const cookie = document.getElementById("cookie");

const cookieImages = [
    "Images/main.png",
    "Images/cookie1.png",
    "Images/cookie2.png",
    "Images/cookie3.png",
    "Images/cookie4.png",
    "Images/cookie5.png",
    "Images/cookie6.png"
];

let currentIndex = 0;
cookie.addEventListener("click", () => {
    console.log("cookie clicks!");
    currentIndex++;
    if (currentIndex >= cookieImages.length) {
        currentIndex = 0;
    
    }
       
    console.log("switching to:", cookieImages[currentIndex]);
     cookie.src = cookieImages[currentIndex];

});