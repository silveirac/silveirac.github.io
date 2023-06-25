import { createContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    portugues: {
        id: "PTBR",
        text: PTBR
    },
    espanol: {
        id: "ES",
        text: ES
    }
};
const LanguageContext = createContext(languages.english);

export default LanguageContext;