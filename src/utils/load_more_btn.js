export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.lable = refs.button.querySelector(".label");
    return refs;
  }
  enable() {
    this.refs.button.disabled = false;
    this.refs.lable.textContent = "Показати ще";
  }
  disable() {
    this.refs.button.disabled = true;
    this.refs.lable.textContent = "Завантажуємо....";
  }
  show() {
    this.refs.button.classList.remove("is-hidden");
  }
  hide() {
    this.refs.button.classList.add("is-hidden");
  }
}
