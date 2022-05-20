import { makeObservable, observable, computed, action, flow } from "mobx";
import { quotes_rub, quotes_usd } from "./quotes";

interface InitialQuotes {
  [index: string]: number;
}

interface Quote {
  name: string;
  value: number;
}

export default class Carrency {
  private _apiKey: string = process.env.REACT_APP_API_KEY!;
  private _initialBase: string = "USD";
  private _initialQuotesObject: InitialQuotes = {};
  private _initialNames: string[] = [];
  private _initialQuotes: number[] = [];
  private _base: string = "RUB";

  constructor() {
    //this._apiKey = process.env.REACT_APP_API_KEY!;
    //this._base = 'RUB';

    // fetch(
    //   "https://api.apilayer.com/currency_data/live?source=${this._initialBase}&currencies=",
    //   {
    //     method: "GET",
    //     headers: {
    //       apikey: this._apiKey,
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    const initialQuotesObject: InitialQuotes = quotes_usd;

    for (let key in initialQuotesObject) {
      const name = key.substring(3);
      const value = initialQuotesObject[key];
      this._initialQuotesObject[name] = value;
      this._initialNames.push(name);
      //this._initialQuotes.push(value);
    }
    // console.log(this._initialNames);
    // console.log(this._initialQuotes);

    makeObservable<Carrency, "_base">(this, {
      _base: observable,
      setBase: action,
      quotes: computed,
    });
  }

  public setBase(val: string) {
    this._base = val;
  }

  public get names() {
    return [...this._initialNames];
  }

  public get base() {
    return this._base;
  }

  public get quotes() {
    const base = this._base;
    const quotes: Quote[] = [];

    const baseQuote = this._initialQuotesObject[base];

    for (let name in this._initialQuotesObject) {
      if (name === base) {
        continue;
      }
      const value = baseQuote / this._initialQuotesObject[name];
      quotes.push({ name, value });
    }

    return quotes;
  }
}
