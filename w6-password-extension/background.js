let x = [{
  url: 'default',
  password: 'Password@12'
}];
let found = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log("message received");
    if (request.message === "password_submitted") {
      // console.log(request.data);
      x.push(request.data);
      console.log(x[x.length - 1]);
      found = false;
      //vs i=0;i<x.length-1;i++ --> only checking the last entry with the rest
      for (let i = x.length - 1; i <= x.length - 1; i++) {
        for (let j = 0; j < x.length; j++) {
          if (i != j && x[i].url != x[j].url && x[i].password == x[j].password) {
            console.log("password re-use detected!");
            console.log(x[i], x[j]);
            // debugger;
            sendResponse({
              "host1": x[i].url,
              "host2": x[j].url
            });
            found = true;
            break;
            // alert();
          }
        }
        if (found) break;
      }
    }
    return true;
  }
);

//everytime new entry is added in object, run this to check duplicate entry