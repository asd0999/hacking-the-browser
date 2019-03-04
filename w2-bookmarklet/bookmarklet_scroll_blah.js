function injectJquery(callback) {
  if (window.jQuery) {
    return callback(window.jQuery);
  }
  let script = document.createElement('script');
  script.setAttribute(
    'src',
    '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
  );
  script.onload = () => callback(window.jQuery);
  script.onerror = e => alert('The script failed to load: ' + e);
  document.head.appendChild(script);
}

injectJquery(function($) {
      // YOUR CODE GOES HERE and can use the $ variable
      $(window).scroll(function() {
        for (let i = 0; i < 50; i++) {
          $('ol').prepend('<p>blah</p>');
          $('body').append('<p>blah</p>');
        }
      });