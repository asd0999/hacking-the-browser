let x = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("message received");
    if (request.message === "password_submitted") {
      x.push(request.password);
      console.log(x[0]);
    }
  }
);

//everytime new entry is added in object, run this to check duplicate entry
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < x.length; j++) {
    if (i != j && x[i].url == x[j].url && x[i].password == x[j].password) {
      console.log("re-use detected!");
      alert();
    }
  }
}


// function alert() {
//   window.alert("stop using the same passwords for different websites!");
// }