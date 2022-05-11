class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInfo() {
    return fetch(`${this._baseUrl}`).then(res => res.json());
  }
}

const api = new Api({
  baseUrl: "https://t3.myheat.net/api/objects/",
});


export default api;