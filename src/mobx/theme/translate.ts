export interface Translate {
  [index: string]: {
    en: string;
    ru: string;
  };
}

const translateList: Translate = {
  accuracy: {
    en: "Accuracy",
    ru: "Точность",
  },
  baseCurrency: {
    en: "Base currency",
    ru: "Базовая валюта",
  },
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
