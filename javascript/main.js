import dataProcessing from "./dataProcessing.js";

window.addEventListener("load", function () {
  setInterval(() => {
    dataProcessing();
  }, 1000);
});
