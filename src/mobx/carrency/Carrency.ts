import { makeObservable, observable, computed, action } from "mobx";
import { quotes_usd } from "./quotes";
import { FetchStatus } from "./types";

const CONVERTER_BASE = "converter_base";
const QUOTES_BASE = "quotes_base";
const ACCURACY = "accuracy";
const CURRENCY_NAME = "currency_name";
const AMOUNT = "amount";

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
  private _converterBase: string = "RUB";
  private _quotesBase: string = "RUB";
  private _accuracy: number = 2;
  private _amount: number = 1;
  private _name: string = "EUR";
  private _fetchStatus: FetchStatus = FetchStatus.Loading;

  constructor() {
    this._apiKey = process.env.REACT_APP_API_KEY!;

    makeObservable<
      Carrency,
      | "_converterBase"
      | "_quotesBase"
      | "_accuracy"
      | "_name"
      | "_amount"
      | "_fetchStatus"
    >(this, {
      _converterBase: observable,
      _quotesBase: observable,
      _accuracy: observable,
      _amount: observable,
      _name: observable,
      _fetchStatus: observable,
      setConverterBase: action,
      setQuotesBase: action,
      setAccuracy: action,
      setAmount: action,
      setName: action,
      setFetchStatus: action,
      quotes: computed,
      accuracy: computed,
    });

    this.fetchQuotes();

    const converterBase = localStorage.getItem(CONVERTER_BASE);
    if (converterBase) {
      this.setConverterBase(converterBase);
    }

    const quotesBase = localStorage.getItem(QUOTES_BASE);
    if (quotesBase) {
      this.setQuotesBase(quotesBase);
    }

    const accuracy = localStorage.getItem(ACCURACY);
    if (accuracy) {
      this.setAccuracy(parseInt(accuracy));
    }

    const amount = localStorage.getItem(AMOUNT);
    if (amount) {
      this.setAmount(parseFloat(amount) || 1);
    }

    const currencyName = localStorage.getItem(CURRENCY_NAME);
    if (currencyName) {
      this.setName(currencyName);
    }

    window.addEventListener("beforeunload", () => {
      localStorage.setItem(CONVERTER_BASE, this.converterBase);
      localStorage.setItem(QUOTES_BASE, this.quotesBase);
      localStorage.setItem(ACCURACY, String(this.accuracy));
      localStorage.setItem(CURRENCY_NAME, this.name);
      localStorage.setItem(AMOUNT, String(this.amount));
    });
  }

  public setConverterBase(val: string) {
    this._converterBase = val;
  }

  public setQuotesBase(val: string) {
    this._quotesBase = val;
  }

  public setAccuracy(val: number) {
    this._accuracy = val;
  }

  public setAmount(val: number) {
    this._amount = val;
  }

  public setName(val: string) {
    this._name = val;
  }

  public setFetchStatus(val: FetchStatus) {
    this._fetchStatus = val;
  }

  public get names() {
    return [...this._initialNames];
  }

  public get converterBase() {
    return this._converterBase;
  }

  public get quotesBase() {
    return this._quotesBase;
  }

  public get accuracy() {
    return this._accuracy;
  }

  public get amount() {
    return this._amount;
  }

  public get name() {
    return this._name;
  }

  public get fetchStatus() {
    return this._fetchStatus;
  }

  public get quotes() {
    const base = this.quotesBase;
    const quotes: Quote[] = [];

    for (let name in this._initialQuotesObject) {
      if (name === base) {
        continue;
      }
      const value = this.evalQuote(name, base);
      quotes.push({ name, value });
    }

    return quotes;
  }

  public evalQuote(name: string, base: string) {
    const baseQuote = this._initialQuotesObject[base];

    return baseQuote / this._initialQuotesObject[name];
  }

  public convert() {
    const quote = this.evalQuote(this.name, this.converterBase);

    return quote * this.amount;
  }

  private async fetchQuotes() {
    let initialQuotesObject: InitialQuotes;
    let responseStatus: FetchStatus;

    // const response = await fetch(
    //   `https://api.apilayer.com/currency_data/live?source=${this._initialBase}&currencies=`,
    //   {
    //     method: "GET",
    //     headers: {
    //       apikey: this._apiKey,
    //     },
    //   }
    // );

    // const data = await response.json();
    const data: any = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 1500);
    });

    if (data?.quotes && Object.keys(data.quotes).length) {
      initialQuotesObject = data.quotes;
      responseStatus = FetchStatus.Success;
    } else {
      console.log("Fetch failed");
      initialQuotesObject = quotes_usd;
      responseStatus = FetchStatus.Fail;
    }

    for (let key in initialQuotesObject) {
      const name = key.substring(3);
      const value = initialQuotesObject[key];
      this._initialQuotesObject[name] = value;
      this._initialNames.push(name);
    }

    this.setFetchStatus(responseStatus);
  }
}
