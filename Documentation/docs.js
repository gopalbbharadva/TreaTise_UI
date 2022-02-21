const barIcon = document.querySelector(".bars-icon");
const compList = document.querySelector(".component-list");
const mainContainer = document.querySelector(".main-container");
var mql = window.matchMedia("(max-width:650px)");

compList.style.display = "none";
const show = () => {
  if (compList.style.display === "block") {
    compList.style.display = "none";
  } else {
    compList.style.display = "block";
  }
};

const hideCompList = (mql) => {
  !mql.matches && (compList.style.display = "none");
};
hideCompList(mql);
mql.addEventListener("change", hideCompList);

document.querySelectorAll(".component-item").forEach((link) =>
  link.addEventListener("click", () => {
    compList.style.display = "none";
  })
);

const hideMenu = (e) => {
  console.log(e);
  if (!e.target.classList.contains("component-list"))
    compList.style.display = "none";
};

mainContainer.addEventListener("click", (e) => hideMenu(e));
barIcon.addEventListener("click", show);
