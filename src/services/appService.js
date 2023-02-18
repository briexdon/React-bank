import axios from "axios";

const filterCurrency = (data) => {
  return data.filter((elem) => {
    if (elem.cc === "USD" || elem.cc === "EUR" || elem.cc === "PLN" || elem.cc === "JPY") {
      return elem;
    }
  });
};

const getResource = async () => {
  const res = await axios
    .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json")
    .then((response) => filterCurrency(response.data))
    .catch((error) => console.log(error));

  return await res;
};

export default getResource;
