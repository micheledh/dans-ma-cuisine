import {observable} from 'mobx';

class LocaleStore {
    @observable locale = 'en';

    goFr = () => {
        this.locale = 'fr';
    };

    goEn = () => {
        this.locale = 'en';
    };
}

const singleton = new LocaleStore();
export default singleton;
