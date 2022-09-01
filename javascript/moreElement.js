import elementMaker from "./elementMaker.js";

export default function moreElement(type, text, count) {
  let temp = [];
  for (let i = 0; i < count; i++) {
    temp.push(elementMaker(type, text));
  }

  return temp.join("");
}
