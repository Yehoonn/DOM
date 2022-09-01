export default async function dataCall() {
  let dataObject = {
    nameArray: [],
    priceArray: [],
    lastestPriceArray: [],
  };

  let response = await fetch("https://api.bithumb.com/public/ticker/ALL");
  let result = response.json();
  result.then((elem) => {
    for (let key in elem.data) {
      dataObject.nameArray.push(key);
      dataObject.priceArray.push(elem.data[key].closing_price);
      dataObject.lastestPriceArray.push(elem.data[key].fluctate_24H);
    }
  });

  return dataObject;
}
