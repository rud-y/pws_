// document.window.scroll(function (e) {
//   var ul = document.getElementById("ul-nav");
//   var isPositionFixed = (ul.style = "position:fixed;");
//   if (document.window.scrollTop() > 200 && !isPositionFixed) {
//     ul.style = "position:fixed; top:0px;";
//   }
//   if (document.window.scrollTop() < 200 && isPositionFixed) {
//     ul.style = "position:relative; top:0px;";
//   }
// });
window.addEventListener("DOMContentLoaded", () => {
  const myDiv = document.querySelector("#logo-div");
  let pics = [
    "images/PANO_holyrood.jpg",
    "images/PANO_scotland.jpg",
    // "images/edinburgh_green.jpg",
    // "images/edi1.jpg",
    // "images/pent1.jpg",
    // "images/pent2.jpg",
    // "images/pepnt3.jpg",
  ];
  // const timerId = setInterval(() => {
  //   console.log(pics.length);
  //   let x = Math.floor(Math.random() * pics.length);
  //   myDiv.style.backgroundImage = "url('" + pics[x] + "')";
  //   pic[x].style.objectFit = "contain";
  //   // myDiv.style.verticalAlign = "middle";
  //   // myDiv.style.backgroundSize = "100%";
  // }, 2000);
});
