// Fade-In-Up effect
// Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle scroll events
        function handleScroll() {
            const cardLinks = document.querySelectorAll('.card-link');

            cardLinks.forEach(cardLink => {
                if (isInViewport(cardLink)) {
                    cardLink.classList.add('fade-in-up');
                }
            });
        }

        // Attach the scroll event listener
        document.addEventListener('scroll', handleScroll);

        // Initial check on page load
        handleScroll();