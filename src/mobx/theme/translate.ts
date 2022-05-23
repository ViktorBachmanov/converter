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
  cacheDataUsed: {
    en: "Data from cache are used",
    ru: "Используются данные из кэша",
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
