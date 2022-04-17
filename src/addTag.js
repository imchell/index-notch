import getRandomColor from "./color";
import anime from "animejs/lib/anime.es.js";

function addTag([percentage, scrollY]) {
  const tag = document.createElement("div");
  tag.style.width = "80px";
  tag.style.height = "30px";
  tag.style.position = "fixed";
  tag.style.backgroundColor = `${getRandomColor()}`;
  tag.style.borderRadius = "0px 22px 22px 0px";
  tag.style.left = "-50px";
  tag.style.top = `${percentage}vh`;
  tag.style.zIndex = 1000;
  tag.style.cursor = "pointer";
  document.documentElement.append(tag);
  tag.addEventListener("mouseover", function reaction() {
    anime({
      targets: tag,
      translateX: 40,
    });
  });
  tag.addEventListener("mouseleave", function reaction() {
    anime({
      targets: tag,
      translateX: 0,
    });
  });
  tag.addEventListener("click", function scroll() {
    window.scrollTo(0, scrollY);
  });
}

export default addTag;
