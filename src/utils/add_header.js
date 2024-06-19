import headerTPL from "../templates/header.hbs";
import logo from "../assets/image/Тризуб logo.png";

const bodyContainer = document.querySelector("body");

const context = {
  logoUrl: logo,
};
const headerEl = headerTPL(context);

bodyContainer.insertAdjacentHTML("beforebegin", headerEl);
