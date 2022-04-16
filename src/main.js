import getScrollPercentage from "./scroll";

/**
 * Detect shortcut to add position mark
 */
document.addEventListener("keydown", function shortcutDetected(event) {
  if (event.ctrlKey && event.key == "b") {
    console.log("shortcut detected");
    console.log(getScrollPercentage());
  }
});
