let x;

// let forms = document.querySelectorAll("");
//run at correct time
//run on current tab


//if an input with type attribute == password exists on a page, save url and password in an object
let passwordInputs = document.querySelectorAll("input[type = password]");
if (passwordInputs.length > 0) {
  console.log("found input field password");
}

document.getElementById("myBtn").addEventListener("click", function() {

  // $('form').on('submit', () => {
  //
  // })

  passwordInputs.forEach(input => {
    // does the input have a value?
    if (input.value.length > 0) {
      console.log("it has a value")
      let password = input.value;
      x = {
        url: window.location.href,
        password: password
      };
      console.log(`password submitted`);
    }
  });

  chrome.runtime.sendMessage({
    "message": "password_submitted",
    "password": x.password
  }, function() {
    console.log("message sent");
  });
});


// function alert() {
//   window.alert("stop using the same passwords for different websites!");
// }