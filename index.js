document.addEventListener("DOMContentLoaded", () => {
  const myDiv = document.querySelector("#contact");
  let pics = [
    "images/PANO_holyrood.jpg",
    "images/PANO_scotland.jpg",
    "images/edinburgh_green.jpg",
    "images/pent2.jpg",
    "images/pent1.jpg",
    "images/pent3.jpg",
  ];

  setInterval(() => {
    let x = Math.floor(Math.random() * pics.length);
    myDiv.style.backgroundImage = "url('" + pics[x] + "')";
    // pics[x].style.objectFit = "contain";
  }, 7000);
});
