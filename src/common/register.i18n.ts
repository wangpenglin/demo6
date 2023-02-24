import { App } from "vue"; 
import { createI18n } from "vue-i18n";
import messages from '../language/index';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
})

const registerI18n = (app: App) => {
    app.use(i18n);
}
export default registerI18n;
