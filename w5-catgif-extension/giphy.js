let gifUrl; // 1ms
let Urls = [];
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=cats-in-space&limit=100");
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=cats&limit=100");
Urls.push("https://api.giphy.com/v1/gifs/search?api_key=Rj4NRE2qDVvjw7gAftCnEyjFkbMUqbXB&q=funny-cats&limit=100");
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
  currentDate.innerHTML = d.toDateString();
  console.log(currentDate);
}, 100);

setTimeout(function() {
  let meow = document.getElementById("meow");
  meow.innerHTML = "Have a meow day!"
}, 1000);