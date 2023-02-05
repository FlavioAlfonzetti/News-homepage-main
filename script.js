function openNav() {
  document.getElementById("sidebar").style.transform = "translateX(0)";
  document.querySelector("body").style.overflow = "hidden";
  document.getElementById("overlay").style.opacity = "0.6";
  document.getElementById("overlay").style.visibility = "visible"; 
  }

  function closeNav() {
    document.getElementById("sidebar").style.transform = "translateX(100%)";
    document.querySelector("body").style.overflow = "visible";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.visibility = "hidden"; 
  }