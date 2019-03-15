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
    var salt = "y0u_n33d_$4lt_2_m4k3_l3m0n4d3"
    var SHA256 = new Hashes.SHA256;
    var passwordHash = SHA256.hex_hmac(password, salt)
    x = {
      url: window.location.hostname,
      password: passwordHash
    };

    chrome.runtime.sendMessage({
      "data": x
    }, function(request) {
      console.log("response from sendMessage:", request);
    });
  });
}

setInterval(doThis, 300);