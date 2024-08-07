import esAR from "./translations/esAR.json";
import enUS from "./translations/enUS.json";
import { createIntl, createIntlCache } from "react-intl";

const messages = {
  en: enUS,
  es: esAR,
};

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "es",
    messages: messages["es"],
  },
  cache
);

export { intl, messages };
