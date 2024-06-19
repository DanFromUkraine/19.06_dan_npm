import { api_options } from "../utils/constants.js";

const { url, path } = api_options.json_server;

function addLaptop(laptop) {
  const base_url = `${url}${path.laptop}`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(laptop),
  };
  return fetch(base_url, options).then((res) => res.json());
}
// addLaptop({
//   name: "Ноутбук 2",
//   img: "https://www.freepnglogos.com/uploads/laptop-png/download-asus-laptop-transparent-png-image-pngimg-35.png",
//   brand: "ASUS",
//   price: 1499.99,
//   screenSize: 14,
//   processor: "AMD Ryzen 9",
//   ram: 32,
//   storage: "1TB SSD",
//   category: "Ноутбуки",
// });
