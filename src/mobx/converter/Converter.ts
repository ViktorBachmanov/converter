import { quotes_rub, quotes_usd } from "./quotes";

interface Quotes {
  [index: string]: number;
}

export default class Converter {
  private _apiKey: string = process.env.REACT_APP_API_KEY!;
  private _base: string = "USD";
  private _quotes: Quotes;

  constructor() {
    //this._apiKey = process.env.REACT_APP_API_KEY!;
    //this._base = 'RUB';

    // fetch(
    //   "https://api.apilayer.com/currency_data/live?source=RUB&currencies=",
    //   {
    //     method: "GET",
    //     headers: {
    //       apikey: this._apiKey,
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    this._quotes = quotes_usd;
  }
}
