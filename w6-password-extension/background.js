let x = [{
  url: 'default',
  password: 'Password@12'
}];
// let found = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "password_submitted") {
      x.push(request.data);
      console.log(x[x.length - 1]);
      // found = false;
      //vs i=0;i<x.length-1;i++ --> only checking the last entry with the rest
      for (let i = x.length - 1; i <= x.length - 1; i--) {
        let repeats = [];
        for (let j = x.length - 1; j >= 0; j--) {
          if (i != j && x[i].url != x[j].url && x[i].password == x[j].password) {
            if (repeats.includes(x[j])) {
              break;
            } else {
              repeats.push(x[j]);
            }
          }
        }
        sendResponse({
          "repeats": repeats
        });
        console.log("password re-use detected!");
      }
      // if (found) break;
    }
    return true;
  }
);