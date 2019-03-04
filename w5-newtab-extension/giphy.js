let gifUrl; // 1ms
let Urls = [];
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=dogs&limit=30");
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=cats&limit=30");
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=cats-funny&limit=30");
let Url = Urls[Math.floor(Math.random() * Urls.length)];
fetch(Url)
  .then(data => {
    return data.json() // 10ms
  })
  .then(res => { // 11ms
    let imageCount = res.data.length;
    gifUrl = String(res.data[Math.floor(Math.random() * imageCount)].images.original.url);
    console.log(gifUrl);
    let gif = document.getElementById("mygif");
    // console.log(gif);
    gif.setAttribute("src", gifUrl);
  })
setTimeout(function() {
  let currentDate = document.getElementById("date");
  let d = new Date();
  // let year = d.getFullYear();
  // let month = d.getMonth() + 1;
  // let date = d.getDate();
  // currentDate.innerHTML = `${date} ${month} ${year}`
  currentDate.innerHTML = d.toDateString();
  console.log(currentDate);
}, 1000);

// let gif = document.getElementById("mygif");
// console.log(gif);
// gif.setAttribute("src", gifUrl);
// gif.src = gifUrl;





// function callGiphy() {
//   var url = "https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=cats&limit=2";
//   loadJSON(url, gotData);
//
//   function gotData(giphy) {
//     var img = createImg(giphy.data[0].images.original.url);
//     img.size(400, 400);
//   }
// }