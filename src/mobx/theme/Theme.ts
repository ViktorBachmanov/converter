import { makeObservable, observable, action } from "mobx";
import translateList, { Translate } from "./translate";

const LIGHT_MODE = "light_mode";
const LANGUAGE = "language";

export default class Theme {
  private _lightStatus: "light" | "dark" = "dark";
  private _language: "en" | "ru" = "ru";
  private _translate: Translate = translateList;

  constructor() {
    makeObservable<Theme, "_lightStatus" | "_language">(this, {
      _lightStatus: observable,
      _language: observable,
      setLightStatus: action,
      setLanguage: action,
    });

    let lightStatus = localStorage.getItem(LIGHT_MODE);
    if (!lightStatus) {
      lightStatus = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    this.setLightStatus(lightStatus as "light" | "dark");

    const language = localStorage.getItem(LANGUAGE);
    if (language) {
      this.setLanguage(language as "en" | "ru");
    }

    window.addEventListener("beforeunload", () => {
      localStorage.setItem(LIGHT_MODE, this.lightStatus);
      localStorage.setItem(LANGUAGE, this.language);
    });
  }

  get lightStatus() {
    return this._lightStatus;
  }

  get language() {
    return this._language;
  }

  public setLightStatus(val: "light" | "dark") {
    this._lightStatus = val;
    if (val === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  public setLanguage(val: "en" | "ru") {
    this._language = val;
  }

  public tr(key: string) {
    return this._translate[key][this.language];
  }
}
