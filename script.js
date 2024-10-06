let slideIndex = 0;
let slideInterval;

showSlides();

// Function to show slides automatically
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    slideInterval = setTimeout(showSlides, 5000); // Automatically change every 3 seconds
}

// Function to handle manual slide navigation
function plusSlides(n) {
    clearTimeout(slideInterval);  // Stop automatic slide change
    slideIndex += n;
    
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }
    
    showCurrentSlide();
}

// Show the current slide after manual navigation
function showCurrentSlide() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";
    slideInterval = setTimeout(showSlides, 5000); // Restart automatic slide after 3 seconds
}
