// animations.js
// Function to animate the featured scholarships section
function animateScholarships() {
    const scholarships =
    document.querySelectorAll('.scholarships');
    scholarships.forEach((scholarship, index)=>
    {
    setTimeout(()=>{
    scholarship.style.opacity='1';
    scholarship.style.transform='translateY(0)';
    }, index * 200);
    });
    }
    // Function to trigger animation when scrolling to the section
    function checkScroll() {
    const scholarshipsSection =
    document.getElementById('scholarships');
    const scholarshipsSectionPosition =
    scholarshipsSection.getBoundingClientRect()
    .top;
    const windowHeight = window.innerHeight;
    if (scholarshipsSectionPosition< windowHeight * 0.75) {
    animateScholarships();
    window.removeEventListener('scroll',
    checkScroll);
    }
    }
    // Add scroll event listener to trigger animation
    window.addEventListener('scroll', checkScroll);
    