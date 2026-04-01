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

  const copyrights = document.getElementById("copyrights");
  let currentYear = new Date().getFullYear();
  copyrights.innerHTML = currentYear;

  const pictureDiv = document.querySelector("#contact");

  const imgs = [
    "i1.webp",
    "i2.webp",
    "i3.webp",
    "i4.webp",
    "i5.webp",
    "i6.webp",
    "i7.webp",
  ];
  imgs.forEach((url) => {
    const img = new Image();
    img.src = url;
  });

    setInterval(() => {
      let x = Math.floor(Math.random() * imgs.length);
      pictureDiv.style.backgroundImage = `url('images/${imgs[x]}')`;
    }, 3000);
});
