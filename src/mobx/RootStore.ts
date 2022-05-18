import Theme from "./theme/Theme";

export default class RootStore {
    public theme: Theme;

    constructor() {
        this.theme = new Theme();
    }
}
