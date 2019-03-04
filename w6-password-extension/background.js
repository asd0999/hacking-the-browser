let x = [];

// let forms = document.querySelectorAll("");
//run at correct time
//run on current tab


//if an input with type attribute == password exists on a page, save url and password in an object
let passwordInputs = document.querySelectorAll("input[type = password]");

// $('form').on('submit', () => {
//
// })

if (passwordInputs.length > 0) {
  console.log("found input field password");
  passwordInputs.forEach(input => {
    // does the input have a value?
    if (input.value.length > 0) {
      console.log("it has a value")
      let password = input.value;
      x.push({
        url: window.location.href,
        password: password
      });
      console.log(`password ${x[length-1].password} entered in array`);
    }
  });
}

//everytime new entry is added in object, run this to check duplicate entry
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < x.length; j++) {
    if (i != j && x[i].url == x[j].url && x[i].password == x[j].password) {
      console.log("re-use detected!");
      alert();
    }
  }
}

function alert() {
  window.alert("stop using the same passwords for different websites!");
}