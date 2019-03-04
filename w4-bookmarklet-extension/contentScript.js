console.log("hello from contentScript");

// function injectJquery(callback) {
//   if (window.jQuery) {
//     return callback(window.jQuery);
//   }
//   let script = document.createElement('script');
//   script.setAttribute(
//     'src',
//     '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
//   );
//   script.onload = () => callback(window.jQuery);
//   script.onerror = e => alert('The script failed to load: ' + e);
//   document.head.appendChild(script);
// }

// injectJquery(function($) {
// YOUR CODE GOES HERE and can use the $ variable

$(window).scroll(function() {
  for (let i = 0; i < 10; i++) {
    $('div').prepend('<p>Where do you think you are going?</p>');
    $('body').append('<p>Hahahaha</p>');
  }
});

// $(window).scroll(function() {
//   $('body').css({
//     'background-color': 'black'
//   });
//   alert('Can you read black on black??? If not, try clicking on the screen')
// });
// $(window).click(function() {
//   $('body').css({
//     'background-color': 'white'
//   });
// });

// });