import { api_options } from "../utils/constants.js";

const { url, path } = api_options.json_server;

function removeLaptop(id) {
  const base_url = `${url}${path.laptop}/${id}`;
  const options = {
    method: "DELETE",
  };
  return fetch(base_url, options).then((res) => res.json());
}

removeLaptop(9);
