import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {addLocaleData, IntlProvider} from 'react-intl';
import {observer} from 'mobx-react';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import LocaleStore from './store/Locale';
import App from './App';
import message from './messages/message';

addLocaleData([...en, ...fr]);

@observer
export default class AppRouter extends Component {
    render() {
        return (
            <IntlProvider
                locale={LocaleStore.locale}
                messages={message[LocaleStore.locale].messages}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IntlProvider>
        );
    }
}
