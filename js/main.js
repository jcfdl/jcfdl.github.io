particlesJS.load("particles-js", "static/particlesjs-config.json");

function setActive(header, section) {
  const el = document.querySelector(".selected");

  el.classList.toggle("selected");
  const content = el.getAttribute("data-section");
  document.getElementById(content).classList.toggle("active");

  document.getElementById(header).classList.toggle("selected");
  document.getElementById(section).classList.toggle("active");

  if (section == "projects") {
    document.documentElement.classList.add("is-projects");
    document.body.classList.add("is-projects");
  } else if (document.body.classList.contains("is-projects")) {
    document.documentElement.classList.remove("is-projects");
    document.body.classList.remove("is-projects");
  }
}

document.onreadystatechange = function () {
  // page fully load
  if (document.readyState == "complete") {
    // hide loader after 2 seconds
    setTimeout(function () {
      document.body.classList.toggle("is-loading");
    }, 2500);
  }
};
