import api from "./api/api.js";

export default class App {
  constructor() {
    const data = api.fetchCats();
    data.then((res) => console.log(res));
  }
}