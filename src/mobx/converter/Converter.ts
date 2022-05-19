export default class Converter {
  private _apiKey: string;
  constructor() {
    this._apiKey = process.env.REACT_APP_API_KEY!;

    fetch(
      "https://api.apilayer.com/currency_data/live?base=USD&symbols=EUR,GBP",
      {
        method: "GET",
        headers: {
          apikey: this._apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
