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

//function addDiv(){

//}
injectJquery(function($) {
  // YOUR CODE GOES HERE and can use the $ variable
  // add a click listener to *every* p element on the page
  let scr = false;
  $(window).scroll(function() {
    console.log('scroll');
    if (scr) {
      console.log('ignoring scroll');
      return;
    }
    // This function is executed every time someone scrolls
    scr = true;
    console.log('setting timeout to reset scr');
    setTimeout(() => {
      console.log('resetting scr');
      scr = false;
    }, 5000);

    console.log('adding blah');
    for (let i = 0; i < 1; i++) {
      setTimeout(() => {
        $('h3').prepend('<p>blah' + i + '</p>');
      }, i * 5000);
      //$('body').append('<p>blah</p>');
    }

  });
  $(window).click(function() {
    $('body').append('<div>this is the div</div>'); // This function is executed every time someone clicks
    // Change the text
    //$(this).html(imgHTML);

    // Append the html to the <body> (the browser reads the HTML and adds it appropriately)
    // This appends it to the end of the body (it will appear on screen at the bottom of the page)
  });
});