import { api_options } from "../utils/constants.js";

const {} = api_options;

function fetchLaptop(path) {
  return fetch(`${BASE_URL}${path}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
// fetchLaptop(path.users);
// function fetchLaptopById(laptopId) {
//   return fetch(`${BASE_URL}/${laptopId}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// fetchLaptopById(4);
