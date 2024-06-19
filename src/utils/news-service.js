import { api_options } from "../utils/constants";

const { key, url } = api_options.news;
console.log(key);
// const optinons = {
//   headers: {
//     Autorization: key,
//   },
// };

export default class NewsApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }
  fetchArticles() {
    const baseUrl = `${url}q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}&apiKey=${key}`;
    return fetch(baseUrl)
      .then((response) => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      })
      .catch((error) => console.log(error));
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
