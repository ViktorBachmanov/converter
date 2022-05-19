import Theme from "./theme/Theme";
import Converter from "./converter/Converter";

export default class RootStore {
  public theme: Theme;
  public converter: Converter;

  constructor() {
    this.theme = new Theme();
    this.converter = new Converter();
  }
}
