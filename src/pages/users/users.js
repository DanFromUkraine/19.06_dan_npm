import "../../style/css/main.css";
import "../../style/css/auth_form.css";
import "../../utils/add_header";
import "../../utils/changeUserData"

import userListTpl from "../../templates/userList.hbs";
import { getData } from "../../utils/getData";
import { api_options } from "../../utils/constants";

const { url, path } = api_options.json_server;
const userList = document.querySelector(".userList");

async function renderUserData() {
  try {
    const users = await getData(url, path.users);
    if (users) {
      const userElement = userListTpl(users);
      userList.insertAdjacentHTML("beforeend", userElement);
    } else {
      console.error("No users data available");
    }
  } catch (error) {
    console.error("Error rendering user data:", error);
  }
}

renderUserData();

async function loadUserInfo() {
  await new Promise((res) => window.addEventListener("load", res));
  setTimeout(function() {
    const updateBtn = document.querySelectorAll(".changeBtn");
    console.log(updateBtn);
    updateBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(e.target.dataset.set);
        const form_cont = document.querySelector(".form_main");
        console.dir(form_cont);
        form_cont.classList.remove("form_show");

        localStorage.setItem("uid", JSON.stringify(e.target.dataset.set))

        form_cont.elements[0].value;
      });
    });
  }, 1000)
  
}

loadUserInfo();
