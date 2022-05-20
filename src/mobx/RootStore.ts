import Theme from "./theme/Theme";
import Carrency from "./carrency/Carrency";

export default class RootStore {
  public theme: Theme;
  public carrency: Carrency;

  constructor() {
    this.theme = new Theme();
    this.carrency = new Carrency();
  }
}
