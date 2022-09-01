import dataCall from "./data.js";
import elementMaker from "./elementMaker.js";
import moreElement from "./moreElement.js";

const root = document.getElementById("root");
root.style.width = "100vw";
root.style.height = "100vh";
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "30px";

export default function dataProcessing() {
  let DOM = [];
  let keyArray = [];
  let nameArray = [];
  let priceArray = [];
  let lastestPriceArray = [];
  let arr = [];
  let count = 0;
  dataCall().then((elem) =>
    setTimeout(() => {
      for (let key in elem) {
        keyArray.push(key);
        if (key === keyArray[0]) {
          for (let nameValue of elem[key]) {
            nameArray.push(nameValue);
            count++;
          }
        }
        if (key === keyArray[1]) {
          for (let priceValue of elem[key]) {
            priceArray.push(priceValue);
          }
        }
        if (key === keyArray[2]) {
          for (let latestValue of elem[key]) {
            lastestPriceArray.push(latestValue);
          }
        }
        if (key === keyArray[3]) {
          for (let time of elem[key]) {
            arr.push(time);
          }
        }
      }

      for (let i = 0; i < count - 1; i++) {
        DOM.push(
          elementMaker(
            "section",
            moreElement("div", `${nameArray[i]}`, 1) +
              moreElement("div", `종가 : ${priceArray[i]}원`, 1) +
              moreElement("div", `24H : ${lastestPriceArray[i]}원`, 1) +
              moreElement("div", date(), 1) +
              moreElement("div", time(), 1)
          )
        );
      }
      root.innerHTML = DOM.join(" ");
    }, 100)
  );
}

function date() {
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let result = `${year}년 ${month}월 ${day}일`;

  return result;
}

function time() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let second = today.getSeconds();
  let result = `${hour}시 ${min}분 ${second}초`;

  return result;
}
