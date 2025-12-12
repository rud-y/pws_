document.addEventListener("DOMContentLoaded", () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 180) {
      $(".sticky-name").show(800);
    } else {
      $(".sticky-name").hide(800);
    }
  });

  
 let catchingUp;
 const progressBar = document.querySelector(".progress-bar");

 function updateProgressBarColor() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollablePart = docHeight - windowHeight;

  const scrollPercentage = Math.round((scrollTop / scrollablePart) * 100);

  progressBar.style.width = `${scrollPercentage}%`;
  catchingUp = false;
 }
  
 window.addEventListener("scroll", () => {
  if(!catchingUp) {
   requestAnimationFrame(updateProgressBarColor);
   catchingUp = true;
  }
 });

  const imagesAndVideos = document.querySelectorAll("img, video");
  imagesAndVideos.forEach((item) => {
    item.setAttribute("loading", "lazy");
  });

  const copyrights = document.getElementById("copyrights");
  let currentYear = new Date().getFullYear();
  copyrights.innerHTML = currentYear;

  const pictureDiv = document.querySelector("#contact");
  let pics = [
    "images/hills2.jpg",
    "images/PANO_holyrood.jpg",
    "images/PANO_scotland.jpg",
    "images/pent2.jpg",
    "images/pent3.jpg",
    "images/stabbs.jpg",
    "images/hills.jpg",
  ];

    setInterval(() => {
      let x = Math.floor(Math.random() * pics.length);
      pictureDiv.style.backgroundImage = "url('" + pics[x] + "')";
    }, 7000);
});
