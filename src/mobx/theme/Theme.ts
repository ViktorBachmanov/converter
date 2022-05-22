// import { Storage } from "./types";
import { makeObservable, observable, action } from "mobx";

const LIGHT_MODE = "light_mode";

export default class Theme {
  private _lightStatus: "light" | "dark" = "dark";

  constructor() {
    makeObservable<Theme, "_lightStatus">(this, {
      //makeObservable<Theme>(this, {
      _lightStatus: observable,
      setLightStatus: action,
    });

    let lightStatus = localStorage.getItem(LIGHT_MODE);
    if (!lightStatus) {
      lightStatus = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    this.setLightStatus(lightStatus as "light" | "dark");

    window.addEventListener("beforeunload", () => {
      localStorage.setItem(LIGHT_MODE, this.lightStatus);
    });
  }

  get lightStatus() {
    return this._lightStatus;
  }

  public setLightStatus(val: "light" | "dark") {
    this._lightStatus = val;
    if (val === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // private saveInLocalStorage() {
  //   localStorage.setItem(Storage.LIGHT_MODE, this.lightStatus);
  // }
}
