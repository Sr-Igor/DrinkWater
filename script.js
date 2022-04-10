let cups = document.querySelectorAll(".glass").length;

document.querySelectorAll(".glass").forEach((item) => {
  item.addEventListener("click", drankGlasses);
});

function drankGlasses() {
  let dataKey = event.target.getAttribute("data-cup");
  fillScreen(dataKey);
}

function fillScreen(dataKey) {
  let times = 0;
  for (let i = 1; i <= dataKey; i++) {
    let beforeCups = document.querySelector(`.glass[data-cup="${i}"]`);
    beforeCups.classList.add("active");
    beforeCups.setAttribute("disabled", true);
    times++;
  }

  let total = 100 / cups;
  let qt = total * times;
  let remained = 2 - (qt/100 * 2)


  document.querySelector(".percentage").style.height = `${qt}%`;
  document.querySelector(".percentage").innerHTML = `${qt}%`;
  document.querySelector("h3").innerHTML = `${remained}L`

  if (qt == 100) {
    document.querySelector(".title").style.height = "0";
    document.querySelector(".title").innerHTML = "";
  }
}
