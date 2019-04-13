import LocalizedStrings from 'react-localization';
import {en} from '../res/strings';

class i18nImpl {
    resourceString = null;
    setImplementation(language, resourceString) {
        let localizedStrings = new LocalizedStrings(resourceString);
        localizedStrings.setLanguage(language);
        this.resourceString = localizedStrings;
    }
}

const i18n = new i18nImpl();
const messages = { en };
i18n.setImplementation('en', messages);
export const strings = i18n.resourceString;
