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
    "images/i1.webp",
    "images/i2.webp",
    "images/i3.webp",
    "images/i4.webp",
    "images/i5.webp",
    "images/i6.webp",
    "images/i7.webp",
  ];
  imgs.forEach((url) => {
    const img = new Image();
    img.src = url;
  });

    const layers = [
      document.querySelector("#bg-1"),
      document.querySelector("#bg-2"),
    ];
    let activeLayerIndex = 0;

    setInterval(() => {
      let nextLayerIndex = activeLayerIndex === 0 ? 1 : 0;
      const activeLayer = layers[activeLayerIndex];
      const nextLayer = layers[nextLayerIndex];

      let x = Math.floor(Math.random() * imgs.length);

      nextLayer.style.backgroundImage = `url('${imgs[x]}')`;

      nextLayer.style.opacity = 1;
      activeLayer.style.opacity = 0;

      activeLayerIndex = nextLayerIndex;
    }, 2000);
});
