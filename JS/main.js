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

// Fade-In-Up effect
$(window).scroll(function() {
 $('.card-link').each(function() {
  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if (bottom_of_window > bottom_of_object) {
    $(this).addClass('animate');
    $(this).removeClass('card-link');
  }
 });
});

