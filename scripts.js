// Add JavaScript to allow horizontal scrolling using mouse wheel

window.addEventListener('wheel', function(e) {
    if (e.deltaY != 0) {
        e.preventDefault();
        window.scrollTo(window.scrollX + e.deltaY, window.scrollY);
    }
});


// loading animation waiting
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a 4-second loading animation

    var container = document.querySelector('.container');
    container.style.display = 'none';

    setTimeout(function() {
        // Hide the loading animation
        var loadingAnimation = document.querySelector('.loading-animation');
        loadingAnimation.style.display = 'unset';

        // Show the website content by setting body's display to 'block'
        var container = document.querySelector('.container');
        container.style.display = 'flex';
    }, 6000); // 4 seconds delay
});

setTimeout(function() {
    document.querySelector('.character').classList.add('stop');
    document.querySelector('.character span.msg').style.display = 'grid';
  }, 4000);


// Scroll Animation

function scrollToHome() {
    // location.reload();
    // Get the current scroll position
    const currentScroll = window.scrollX;
    const targetScroll = document.querySelector('.home').offsetLeft;

    // Calculate the distance to scroll
    const distance = targetScroll - currentScroll;

    // Set up variables for the animation
    const duration = 500; // duration in milliseconds
    const startTime = performance.now();

    // Define the scroll animation function
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // ensure progress doesn't exceed 1

        // Calculate the new scroll position
        const newScroll = currentScroll + distance * progress;

        // Scroll to the new position
        window.scrollTo(newScroll, 0);

        // Continue the animation if not finished
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    // Start the animation
    requestAnimationFrame(scrollAnimation);
    
}

// JavaScript to show the button after scrolling

window.addEventListener('scroll', function() {
    var button = document.querySelector('.hBtn');
    if (window.scrollX > 2200) { // Adjust 100 to the desired scroll threshold
        button.style.display = 'flex'; // Show the button
    } else {
        button.style.display = 'none'; // Hide the button
    }
});



// Scroll indicator line

document.addEventListener('DOMContentLoaded', () => {
    // Get the scroll indicator element
    const scrollChar = document.querySelector('.scroll-char');

    function handleScrollAndTouch() {
        const charPosition = (window.scrollX / (document.documentElement.scrollWidth - window.innerWidth)) * (document.documentElement.clientWidth - scrollChar.offsetWidth);
        scrollChar.style.left = `${charPosition}px`;
    
        const isScrollingForward = scrollChar.dataset.prevScrollX < window.scrollX;
        scrollChar.dataset.prevScrollX = window.scrollX;
    
        if (!isScrollingForward) {
            scrollChar.classList.add('flipped');
        }
    }
    
    // Event listener for scroll events
    window.addEventListener('scroll', handleScrollAndTouch);
    
    // Event listener for touch events
    window.addEventListener('touchmove', handleScrollAndTouch);
    



    // Set initial image to stationary
    scrollChar.src = "images/char-stationary.png";

    // Variable to track scrolling state
    let isScrolling = false;

    // Function to handle scroll start
    const handleScrollStart = () => {
        isScrolling = true;
        // Start the animation loop
        animateRunning();
    };

    // Function to handle scroll stop
    const handleScrollStop = () => {
        isScrolling = false;
        // Set image to stationary
        scrollChar.src = "images/char-stationary.png";

        scrollChar.classList.remove('flipped');
    };

    // Function to animate running while scrolling
    let runningFrame = 0;
    const animateRunning = () => {
        if (!isScrolling) return; // Exit if not scrolling
        // Toggle between running frames
        runningFrame = 1 - runningFrame; // Alternates between 0 and 1
        scrollChar.src = `images/char-run-${runningFrame}.png`;
        // Repeat the animation with a delay
        setTimeout(animateRunning, 50); // Adjust the delay as needed (in milliseconds)
    };

    // Listen for scroll start
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            handleScrollStart();
        }
    });

    // Listen for scroll start
    window.addEventListener('touchstart', () => {
        if (!isScrolling) {
            handleScrollStart();
        }
    });


    // Listen for scroll stop
    let timer;
    window.addEventListener('scroll', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (isScrolling) {
                handleScrollStop();
            }
        }, 200); // Adjust the debounce time as needed
    });

    window.addEventListener('touchend', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (isScrolling) {
                handleScrollStop();
            }
        }, 200); // Adjust the debounce time as needed
    });
});


// About me heading in About section

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var aboutSection = document.getElementById('about');
    var aboutHeading = aboutSection.querySelector('h1');

    // Calculate the new margin-top value based on scroll position
    var newMarginTop = 100 - (scrollPosition * 100 / window.innerHeight);
    // Ensure the new margin-top value is within bounds (0% to 100%)
    newMarginTop = Math.max(0, Math.min(100, newMarginTop));

    // Set the new margin-top value for the about heading
    aboutHeading.style.marginTop = newMarginTop + '%';
});




// About me content in about section

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var aboutSection = document.getElementById('about');
    var aboutParagraph = aboutSection.querySelector('p');

    // Calculate the percentage of scrolling progress
    var scrollPercentage = (scrollPosition / window.innerHeight) * 100;

    // Calculate the value of translateX based on scroll progress
    var translateXValue = 125 - (scrollPercentage * 1.25); // This adjusts the translateX from 125% to 0% as scroll progresses from 0% to 100%

    // Ensure translateXValue stays within the range of 125% to 0%
    translateXValue = Math.max(0, Math.min(125, translateXValue));

    // Apply the transform style to the paragraph
    aboutParagraph.style.transform = 'translateX(' + translateXValue + '%)';
});



// Service heading in service section

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var serviceSection = document.getElementById('services');
    var serviceHeading = serviceSection.querySelector('h1');

    // Calculate the new margin-left value based on scroll position
    var newMarginLeft = -50 + (scrollPosition * (2.5 + 50) / window.innerWidth); // Adjust range from -50% to 2.5%
    // Ensure the new margin-left value is within bounds (-50% to 2.5%)
    newMarginLeft = Math.max(-50, Math.min(2.5, newMarginLeft));

    // Set the new margin-left value for the service heading
    serviceHeading.style.marginLeft = newMarginLeft + '%';
});

// Skills heading in skill section

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var skillSection = document.getElementById('skills');
    var skillHeading = skillSection.querySelector('h1');

    // Calculate the new margin-left value based on scroll position
    var newMarginLeft = -50 + (scrollPosition * (-1.5 + 50) / window.innerWidth); // Adjust range from -50% to 2.5%
    // Ensure the new margin-left value is within bounds (-50% to 2.5%)
    newMarginLeft = Math.max(-50, Math.min(-1.5, newMarginLeft));

    // Set the new margin-left value for the service heading
    skillHeading.style.marginLeft = newMarginLeft + '%';
});



// Service content in servive section 

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX;
    var servicesSection = document.getElementById('services');
    var sone = servicesSection.querySelector('.sone');
    var stwo = servicesSection.querySelector('.stwo');

    // Calculate the new translateX value for sone based on scroll position
    var soneTranslateX = -150 + (scrollPosition * (45 - (-150)) / window.innerWidth); // Adjust range from -150% to 45%
    soneTranslateX = Math.max(-150, Math.min(45, soneTranslateX)); // Ensure value stays within bounds
    sone.style.transform = 'translateX(' + soneTranslateX + '%)';

    // Calculate the new translateX value for stwo based on scroll position
    var stwoTranslateX = 150 - (scrollPosition * (150 - (-15)) / window.innerWidth); // Adjust range from 150% to -15%
    stwoTranslateX = Math.max(-15, Math.min(150, stwoTranslateX)); // Ensure value stays within bounds
    stwo.style.transform = 'translateX(' + stwoTranslateX + '%)';
});


//Skill progress bar in skill section

////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     let circularProgressBars = document.querySelectorAll(".circular-progress");
//     let htmlValue = document.querySelector(".html");
//     let cssValue = document.querySelector(".css");
//     let pythonValue = document.querySelector(".python");
//     let designValue = document.querySelector(".design");

//     let progressStartValue = 0;

//     let htmlProgressEndValue = 90;
//     let cssProgressEndValue = 84;
//     let pythonProgressEndValue = 70;
//     let designProgressEndValue = 90;

//     let speed = 100;

//     let progress = setInterval(() => {
//         if (progressStartValue <= htmlProgressEndValue) {
//             htmlValue.textContent = `${progressStartValue}%`;
//             circularProgressBars[0].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
//         }
//         if (progressStartValue <= cssProgressEndValue) {
//             cssValue.textContent = `${progressStartValue}%`;
//             circularProgressBars[1].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
//         }
//         if (progressStartValue <= pythonProgressEndValue) {
//             pythonValue.textContent = `${progressStartValue}%`;
//             circularProgressBars[2].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
//         }
//         if (progressStartValue <= designProgressEndValue) {
//             designValue.textContent = `${progressStartValue}%`;
//             circularProgressBars[3].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
//         }

//         progressStartValue++;
//     }, speed);
// });

/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    // Select the skills section
    const skillsSection = document.getElementById("skills");

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    // Callback function to start progress when the section is in the viewport
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(); // Call function to start the progress animation
                observer.unobserve(entry.target); // Stop observing once the section is in view
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Observe the skills section
    observer.observe(skillsSection);

    // Function to start the progress animation
    function startProgress() {
        let circularProgressBars = document.querySelectorAll(".circular-progress");
        let htmlValue = document.querySelector(".html");
        let cssValue = document.querySelector(".css");
        let pythonValue = document.querySelector(".python");
        let designValue = document.querySelector(".design");

        let progressStartValue = 0;

        let htmlProgressEndValue = 90;
        let cssProgressEndValue = 84;
        let pythonProgressEndValue = 70;
        let designProgressEndValue = 90;

        let speed = 100;

        let progress = setInterval(() => {
            if (progressStartValue <= htmlProgressEndValue) {
                htmlValue.textContent = `${progressStartValue}%`;
                circularProgressBars[0].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
            }
            if (progressStartValue <= cssProgressEndValue) {
                cssValue.textContent = `${progressStartValue}%`;
                circularProgressBars[1].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
            }
            if (progressStartValue <= pythonProgressEndValue) {
                pythonValue.textContent = `${progressStartValue}%`;
                circularProgressBars[2].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
            }
            if (progressStartValue <= designProgressEndValue) {
                designValue.textContent = `${progressStartValue}%`;
                circularProgressBars[3].style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, #181818 0deg)`;
            }

            progressStartValue++;
        }, speed);
    }
});


// Project section heading

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollX; // Use scrollX for horizontal scrolling
    var head = document.querySelector('.projects h1');
    var section = document.querySelector('.projects');

    // Calculate the section's offset from the left side of the viewport
    var sectionOffset = section.getBoundingClientRect().left;

    // Calculate the section's width
    var sectionWidth = section.offsetWidth;

    // Calculate the new translateY value based on scroll position and section position
    var translateYValue = 100 - ((scrollPosition - sectionOffset) * 100 / sectionWidth);

    // Ensure value stays within bounds
    translateYValue = Math.max(0, Math.min(100, translateYValue));

    // Set the new transform value for the heading
    head.style.transform = 'translateY(' + translateYValue + 'vh)';
});

    
