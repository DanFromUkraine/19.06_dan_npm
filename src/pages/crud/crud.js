import "../../style/css/main.css";
import "../../style/css/auth_form.css";
import "../../utils/add_header.js";
import "../../utils/r-get.js";
import "../../utils/d-delete.js";
import "../../utils/c-post.js";
import { setData } from "../../utils/setData";
import { api_options } from "../../utils/constants";
const { url, path } = api_options.json_server;

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = {};
  const userData = new FormData(e.currentTarget);
  userData.forEach((value, key) => {
    users[key] = value;
  });
  setData(url, path.users, users);
});
