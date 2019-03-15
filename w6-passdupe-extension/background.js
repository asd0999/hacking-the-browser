//copy of background.js at proof of concept stage as backup
let x = {
  // "default": "testpassword"
};
let found = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log("message received");
    let repeats = [];
    x[request.data.url] = request.data.password;
    console.log(x);
    // if(Object.values(x).includes(request.data.password)){}
    for (let [url, pw] of Object.entries(x)) {
      if (url !== request.data.url && pw === request.data.password) {
        // same password used on a diff url
        repeats.push(url);
        found = true;
      }
    }
    if (found) {
      // console.log("password re-use detected!");
      let l = repeats.length;
      if (l == 1) {
        window.alert(`You used the same password on ${repeats[0]}. Consider changing one of the passwords to avoid #pwnage`);
      } else if (l == 2) {
        window.alert(`You used the same password on ${repeats[0]} and ${repeats[1]}. Consider changing one of the passwords to avoid #pwnage`);
      } else if (l >= 3) {
        window.alert(`You used the same password on ${repeats[0]}, ${repeats[1]} and ${repeats[2]}. Consider changing one of the passwords to avoid #pwnage`);
      }
      sendResponse({
        "repeats": repeats
      });
    }
  }
);

//everytime new entry is added in object, run this to check duplicate entry