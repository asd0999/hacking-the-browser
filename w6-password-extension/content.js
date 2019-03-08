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
    console.log(newInput);
    var password = $(this).val();
    x = {
      url: window.location.hostname,
      password: password
    };
    // chrome.runtime.sendMessage(password);
    chrome.runtime.sendMessage({
      "message": "password_submitted",
      "data": x
    }, function(request) {
      console.log("response from sendMessage:", request);
      let a = request.host1;
      let b = request.host2;
      window.alert(`you used the same password on ${b}. consider changing one of the passwords`);
    });
  });
}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("recd message");
//   let a = request.host1;
//   let b = request.host2;
//   window.alert(`you used the same password for ${a} and ${b}`);
//   // giveAlert();
// });

// function giveAlert() {
//   window.alert(`you used the same password for ${} and ${}`);
// }

setInterval(doThis, 1000);

// setInterval(function() {
//   var insertedNodes = [];
//   var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//       for (var i = 0; i < mutation.addedNodes.length; i++)
//         insertedNodes.push(mutation.addedNodes[i]);
//     })
//   });
//   observer.observe(document, {
//     childList: true
//   });
// console.log(insertedNodes);
// }, 1000);

//not working on udemy and udacity - is it an autofill thing???