export interface Translate {
  [index: string]: {
    en: string;
    ru: string;
  };
}

const translateList: Translate = {
  converter: {
    en: "Converter",
    ru: "Конвертер",
  },
  quotes: {
    en: "Quotes",
    ru: "Котировки",
  },
};

export default translateList;
