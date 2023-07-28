particlesJS.load("particles-js", "static/particlesjs-config.json");

function setActive(header, section) {
  const el = document.querySelector(".selected");

  el.classList.toggle("selected");
  const content = el.getAttribute("data-section");
  document.getElementById(content).classList.toggle("active");

  document.getElementById(header).classList.toggle("selected");
  document.getElementById(section).classList.toggle("active");
}
