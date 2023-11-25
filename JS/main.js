// Page Loader
 // Get a reference to the loader
            var loader = document.querySelector('.page-loader');

            // Show the loader when the page starts loading
            window.addEventListener('loadstart', function () {
                loader.style.display = 'block';
            });

            // Hide the loader when the page has finished loading
            window.addEventListener('load', function () {
                loader.style.display = 'none';
            });