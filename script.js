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
    
    // Stop the automatic slideshow at the last slide and freeze
    if (slideIndex > slides.length) {
        slideIndex = slides.length;  // Freeze on the last slide
        slides[slideIndex - 1].style.display = "block"; // Show the last slide
        clearTimeout(slideInterval);  // Stop the auto change
        return;  // Exit the function to stop the loop
    }
    
    slides[slideIndex - 1].style.display = "block";  
    slideInterval = setTimeout(showSlides, 5000); // Automatically change every 5 seconds
}

// Function to handle manual slide navigation
function plusSlides(n) {
    clearTimeout(slideInterval);  // Stop automatic slide change
    slideIndex += n;
    
    let slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex > slides.length) {
        slideIndex = slides.length; // Stay on the last slide
    } else if (slideIndex < 1) {
        slideIndex = 1; // Stay on the first slide
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
    
    // Restart automatic slide only if not at the last slide
    if (slideIndex < slides.length) {
        slideInterval = setTimeout(showSlides, 5000); // Restart automatic slide after 5 seconds
    }
}
