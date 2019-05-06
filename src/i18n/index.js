import LocalizedStrings from 'react-localization';
import { en } from '../res/i18n/en';
import { fr } from '../res/i18n/fr';
import { zh } from '../res/i18n/zh';
import { getValue, setValue } from '../utils/Storage';

const supportLangues = {
    fr: { fr },
    en: { en },
    zh: { zh }
};

class i18nImpl {
    resourceString = null;
    setImplementation(language, resourceString) {
        let localizedStrings = new LocalizedStrings(resourceString);
        localizedStrings.setLanguage(language);
        this.resourceString = localizedStrings;
    }
}

const i18n = new i18nImpl();

const getNavigatorLanguages = (langue => {
    switch (langue) {
        case 'fr-FR':
        case 'fr':
            return 'fr';
        case 'en-US':
        case 'en':
            return 'en';
        case 'zh-CN':
        case 'zh':
        case 'zh-TW':
            return 'zh';
        default:
            return 'en';
    }
})(window.navigator.language);

const getLanguage = () => {
    if (!getValue()) {
        setValue(getNavigatorLanguages);
        return getNavigatorLanguages;
    } else {
        return getValue();
    }
};

const messages = supportLangues[getLanguage()];
i18n.setImplementation('en', messages);
export const strings = i18n.resourceString;
