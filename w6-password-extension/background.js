let x = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("message received");
    if (request.message === "password_submitted") {
      x.push(request.password);
      console.log(x[x.length - 1]);
      for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
          if (i != j && x[i] == x[j]) {
            console.log("re-use detected!");
            alert();
          }
        }
      }
    }
  }
);

//everytime new entry is added in object, run this to check duplicate entry



// function alert() {
//   window.alert("stop using the same passwords for different websites!");
// }