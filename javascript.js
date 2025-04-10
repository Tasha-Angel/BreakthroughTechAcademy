        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Modal functionality
        const enrollButton = document.getElementById('enrollButton');
        const enrollModal = document.getElementById('enrollModal');
        const closeModal = document.getElementById('closeModal');
        
        enrollButton.addEventListener('click', () => {
            enrollModal.classList.add('active');
        });
        
        closeModal.addEventListener('click', () => {
            enrollModal.classList.remove('active');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === enrollModal) {
                enrollModal.classList.remove('active');
            }
        });
        
        // Form submission
        const enrollForm = document.getElementById('enrollForm');
        
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            alert('Thank you for your interest! Our team will contact you soon.');
            
            // Reset form and close modal
            enrollForm.reset();
            enrollModal.classList.remove('active');
        });
        
        // Testimonial slider
        const testimonialSlider = document.getElementById('testimonialSlider');
        const prevButton = document.getElementById('prevTestimonial');
        const nextButton = document.getElementById('nextTestimonial');
        
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.testimonial').length;
        
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
        
        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 8000);





        document.addEventListener('DOMContentLoaded', function() {
            // Elements - Single declaration for all elements
            const coursesGrid = document.getElementById('coursesGrid');
            const filterSelect = document.getElementById('filterCourses');
            const searchInput = document.getElementById('searchCourses');
            const searchButton = document.getElementById('searchButton');
            const courseModal = document.getElementById('courseModal');
            const closeModal = document.getElementById('closeCourseModal');
            const modalTitle = document.getElementById('modalCourseTitle');
            const modalDescription = document.getElementById('modalCourseDescription');
            const courseInterestForm = document.getElementById('courseInterestForm');
            const selectedCourseInput = document.getElementById('selectedCourse');
            const formSubmissionMessage = document.getElementById('formSubmissionMessage');
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            const courseCards = Array.from(document.querySelectorAll('.course-card'));
        
// Course data
const courseDetails = {
    "Web Development Fundamentals": {
        description: `
            <p>Learn the core technologies that power the web: HTML, CSS, and JavaScript. This comprehensive course covers responsive design principles, DOM manipulation, and building interactive web pages. You'll complete 5 hands-on projects including a personal portfolio website and interactive web applications.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>HTML5 semantic markup and document structure</li>
                <li>CSS styling, layouts, animations, and responsive design</li>
                <li>JavaScript fundamentals and DOM manipulation</li>
                <li>Web accessibility best practices</li>
                <li>Version control with Git and GitHub</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>Front-End Developer, Junior Web Developer, Web Content Manager</p>
        `
    },
    "Full-Stack Development": {
        description: `
            <p>Master both front-end and back-end technologies to build complete web applications. This intensive course covers React.js, Node.js, Express, and MongoDB/SQL databases. You'll learn authentication, API development, state management, and deployment strategies while completing 8 comprehensive projects including a fully functional e-commerce platform and social media application.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Front-end development with React.js</li>
                <li>Back-end development with Node.js and Express</li>
                <li>Database design and implementation (SQL and NoSQL)</li>
                <li>RESTful API development</li>
                <li>Authentication and authorization</li>
                <li>Deployment and DevOps basics</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>Full-Stack Developer, Software Engineer, Application Developer</p>
        `
    },
    "UX/UI Design Essentials": {
        description: `
            <p>Develop skills in user-centered design, wireframing, and prototyping. This course covers design thinking methodologies, user research techniques, information architecture, and industry-standard tools like Figma and Adobe XD. You'll complete 4 portfolio-ready projects including a mobile app redesign and a complete web application user interface.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Design thinking and user-centered design processes</li>
                <li>User research and testing methods</li>
                <li>Wireframing and prototyping techniques</li>
                <li>UI design principles and visual design fundamentals</li>
                <li>Interaction design and microinteractions</li>
                <li>Design systems and component libraries</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>UX Designer, UI Designer, Product Designer, Interaction Designer</p>
        `
    },
    "Data Science & Machine Learning": {
        description: `
            <p>Dive deep into data analysis, visualization, and predictive modeling. This comprehensive program covers Python, Pandas, NumPy, scikit-learn, TensorFlow, and deep learning fundamentals. You'll work on 10 real-world projects including sentiment analysis, image recognition, recommendation systems, and a capstone project solving an industry problem with machine learning.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Python programming for data science</li>
                <li>Data cleaning, manipulation, and visualization</li>
                <li>Statistical analysis and hypothesis testing</li>
                <li>Machine learning algorithms and models</li>
                <li>Deep learning and neural networks</li>
                <li>Big data processing techniques</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>Data Scientist, Machine Learning Engineer, Data Analyst, AI Specialist</p>
        `
    },
    "Mobile App Development": {
        description: `
            <p>Create native and cross-platform mobile applications for iOS and Android. This course covers React Native, Flutter, Swift fundamentals, and app store deployment processes. You'll build 6 complete applications including a location-based service app, messaging platform, and a feature-rich productivity tool with offline capabilities and cloud synchronization.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Cross-platform development with React Native or Flutter</li>
                <li>Native iOS app development fundamentals</li>
                <li>Native Android app development fundamentals</li>
                <li>Mobile UX/UI design principles</li>
                <li>State management and data persistence</li>
                <li>App store publication and optimization</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>Mobile App Developer, React Native Developer, iOS/Android Developer</p>
        `
    },
    "Cybersecurity Professional": {
        description: `
            <p>Master the skills to protect systems and networks from digital attacks. This advanced program covers network security, ethical hacking, penetration testing, security analysis, and compliance frameworks. You'll complete 7 practical projects including vulnerability assessments, security audits, and building secure infrastructure for enterprise environments.</p>
            <h3>What You'll Learn</h3>
            <ul>
                <li>Network security and penetration testing</li>
                <li>Vulnerability assessment and management</li>
                <li>Security protocols and cryptography</li>
                <li>Incident response and forensics</li>
                <li>Security compliance and governance</li>
                <li>Threat intelligence and analysis</li>
            </ul>
            <h3>Career Opportunities</h3>
            <p>Cybersecurity Analyst, Security Engineer, Ethical Hacker, SOC Analyst</p>
        `
    }
};



            // Configuration
            const DEBOUNCE_DELAY = 300; // milliseconds
            const MIN_SEARCH_LENGTH = 2; // Minimum characters before searching
            let debounceTimer;
        
            // Add no results element
            const noResultsElement = document.createElement('div');
            noResultsElement.className = 'no-results';
            noResultsElement.textContent = 'No courses match your search criteria. Please try different keywords or filters.';
            noResultsElement.style.display = 'none';
            coursesGrid.appendChild(noResultsElement);
        
            // Event Listeners - Consolidated and optimized
            filterSelect.addEventListener('change', performSearch);
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') performSearch();
            });
        
            // Course modal and other event listeners remain the same...
            // [Keep all your existing modal and form handling code]
        
            // Optimized search and filter implementation
            function handleSearch() {
                clearTimeout(debounceTimer);
                searchInput.classList.add('search-loading');
                debounceTimer = setTimeout(performSearch, DEBOUNCE_DELAY);
            }
        
            function performSearch() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const filterValue = filterSelect.value;
                searchInput.classList.remove('search-loading');
        
                // Early exit for short searches
                if (searchTerm && searchTerm.length < MIN_SEARCH_LENGTH) {
                    updateResultsVisibility(0);
                    return;
                }
        
                let visibleCount = 0;
                
                courseCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    const level = card.getAttribute('data-level');
                    
                    const matchesSearch = !searchTerm || 
                                        title.includes(searchTerm) || 
                                        description.includes(searchTerm);
                    const matchesFilter = filterValue === 'all' || 
                                        level === filterValue;
                    
                    if (matchesSearch && matchesFilter) {
                        showCard(card);
                        visibleCount++;
                    } else {
                        hideCard(card);
                    }
                });
                
                updateResultsVisibility(visibleCount);
            }
        
            function showCard(card) {
                if (card.style.display === 'none') {
                    card.style.display = '';
                    card.style.opacity = '0';
                    void card.offsetWidth; // Trigger reflow
                    card.style.transition = 'opacity 0.3s ease';
                    card.style.opacity = '1';
                }
            }
        
            function hideCard(card) {
                if (card.style.display !== 'none') {
                    card.style.transition = 'opacity 0.3s ease';
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            }
        
            function updateResultsVisibility(visibleCount) {
                noResultsElement.style.display = visibleCount === 0 ? 'block' : 'none';
                
                // Update screen reader status
                const statusEl = document.getElementById('searchResultsStatus') || 
                                createResultsStatusElement();
                statusEl.textContent = `${visibleCount} ${visibleCount === 1 ? 'course' : 'courses'} found`;
            }
        
            function createResultsStatusElement() {
                const statusEl = document.createElement('div');
                statusEl.id = 'searchResultsStatus';
                statusEl.setAttribute('aria-live', 'polite');
                statusEl.setAttribute('aria-atomic', 'true');
                statusEl.className = 'sr-only';
                searchInput.insertAdjacentElement('afterend', statusEl);
                return statusEl;
            }
        
            // Initialize on page load
            courseCards.forEach(card => {
                card.style.display = '';
                card.style.opacity = '1';
            });
            updateResultsVisibility(courseCards.length);
        });

 
        // Add this to your existing script or create a new script section
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');
    const totalSlides = slides.length;
    
    // Auto slide interval (5 seconds)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Function to show a specific slide
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and highlight current dot
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        // Update current slide index
        currentSlide = n;
    }
    
    // Next slide function
    function nextSlide() {
        showSlide((currentSlide + 1) % totalSlides);
    }
    
    // Previous slide function
    function prevSlide() {
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }
    
    // Reset timer when manually changing slides
    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Event listeners for arrows
    nextArrow.addEventListener('click', function() {
        nextSlide();
        resetTimer();
    });
    
    prevArrow.addEventListener('click', function() {
        prevSlide();
        resetTimer();
    });
    
    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
            resetTimer();
        });
    });
    
    // Initialize the first slide
    showSlide(0);
});


// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    let currentIndex = 0;
    
    // Function to update the active slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
    
    // Event listener for previous button
    prevBtn.addEventListener('click', function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        showSlide(newIndex);
    });
    
    // Event listener for next button
    nextBtn.addEventListener('click', function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    });
    
    // Event listeners for dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }, 5000);
});